import pandas as pd
import json
from sklearn.preprocessing import MultiLabelBinarizer, LabelEncoder

# Load schemes data
with open('data.json', 'r') as f:
    schemes_data = json.load(f)

# Prepare features
schemes = []
for scheme in schemes_data:
    scheme_features = {
        'scheme_name': scheme['schemeName'],
        'beneficiary_state': ','.join(scheme['beneficiaryState']),
        'min_age': min(age['gte'] for age in scheme['age'].values()),
        'max_age': max(age['lte'] for age in scheme['age'].values()),
        'tags': ','.join(scheme['tags'])
    }
    schemes.append(scheme_features)

df = pd.DataFrame(schemes)

# Encode categorical variables
mlb = MultiLabelBinarizer()
df = df.join(pd.DataFrame(mlb.fit_transform(df.pop('tags').str.split(',')),
                          columns=mlb.classes_,
                          index=df.index))

le = LabelEncoder()
df['beneficiary_state'] = le.fit_transform(df['beneficiary_state'])

# Save encoders for later use
import joblib
joblib.dump(mlb, 'tag_encoder.joblib')
joblib.dump(le, 'state_encoder.joblib')

# Create target variable (all schemes are considered eligible for now)
df['eligible'] = 1

# Save prepared data
df.to_csv('prepared_schemes.csv', index=False)