import uvicorn
from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
import json
import certifi
import joblib
import xgboost as xgb
from pydantic import BaseModel
import pandas as pd
import numpy as np

app = FastAPI()
uri = "mongodb+srv://duplixx:12345@cluster0.8vzkxzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


client = MongoClient(uri, tlsCAFile=certifi.where())
db = client["your_database_name"]  
collection = db["Cluster0"]  
model = joblib.load('xgboost_scheme_model.joblib')
tag_encoder = joblib.load('tag_encoder.joblib')
state_encoder = joblib.load('state_encoder.joblib')


class InputData(BaseModel):
    state: str
    age: int
    gender: str
    maritalStatus: str
    incomeLevel: str
    educationLevel: str
    dependants: int
    employmentStatus: str
    disability: str

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.post("/schemes")
def post_schemes():
    try:
        with open('data.json', 'r') as file:
            data = json.load(file)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="data.json file not found")
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Error decoding JSON from data.json")
    
    if data:
        collection.insert_many(data)
        return {"message": "Schemes posted successfully"}
    else:
        raise HTTPException(status_code=400, detail="No data to insert")
    

@app.get("/schemes")
def get_schemes():
    schemes = list(collection.find({}, {'_id': 0}))
    return schemes



@app.get("/schemes/{scheme_id}")
def get_scheme_by_id(scheme_id: str):
    scheme = collection.find_one({"schemeName": scheme_id}, {'_id': 0})
    if scheme:
        return scheme
    else:
        raise HTTPException(status_code=404, detail="Scheme not found")
    
    
    
@app.get("/schemes/search")
def search_schemes(query: str):
    schemes = list(collection.find({"$text": {"$search": query}}, {'_id': 0}))
    return schemes



@app.post("/predict_eligibility")
def predict_eligibility(data: InputData):
    try:
        # Prepare input data
        input_df = pd.DataFrame([data.dict()])
        
        # Encode state
        input_df['state'] = state_encoder.transform([input_df['state']])[0]
        
        # Create tag columns (all False initially)
        for tag in tag_encoder.classes_:
            input_df[tag] = False
        
        # Set relevant tags based on input
        if data.educationLevel in ['pre-metric', 'higher-education']:
            input_df['Secondary Education'] = True
        if data.educationLevel in ['graduate', 'post-graduate']:
            input_df['Senior Secondary Education'] = True
        if data.gender == 'other':
            input_df['Transgender'] = True
        
        # Make prediction
        eligible_schemes = []
        schemes_data = pd.read_csv('prepared_schemes.csv')
        for _, scheme in schemes_data.iterrows():
            scheme_features = scheme.drop(['scheme_name', 'eligible'])
            combined_features = pd.concat([input_df.iloc[0], scheme_features]).to_frame().T
            prediction = model.predict(combined_features)
            if prediction[0] == 1:
                eligible_schemes.append(scheme['scheme_name'])
        
        return {"eligible_schemes": eligible_schemes}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3000)