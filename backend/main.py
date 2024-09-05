import uvicorn
from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
from pymongo.server_api import ServerApi
import json
import certifi

app = FastAPI()
uri = "mongodb+srv://duplixx:12345@cluster0.8vzkxzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


client = MongoClient(uri, tlsCAFile=certifi.where())
db = client["your_database_name"]  # Replace with your database name
collection = db["Cluster0"]  # Replace with your collection name

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.post("/schemes")
def post_schemes(request: dict):
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

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3000)