import pandas as pd
import xgboost as xgb
from sklearn.model_selection import train_test_split
import joblib

# Load prepared data
df = pd.read_csv('prepared_schemes.csv')

# Prepare features and target
X = df.drop(['scheme_name', 'eligible'], axis=1)
y = df['eligible']

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = xgb.XGBClassifier(random_state=42)
model.fit(X_train, y_train)

# Save the model
joblib.dump(model, 'xgboost_scheme_model.joblib')

# Print feature importance
feature_importance = model.feature_importances_
feature_names = X.columns
for importance, name in sorted(zip(feature_importance, feature_names), reverse=True):
    print(f"{name}: {importance}")