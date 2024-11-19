import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_iris


iris = load_iris()
data = pd.DataFrame(data=iris.data, columns=iris.feature_names)
data["species"] = iris.target

data = data.fillna(data.mean())

# Remove duplicates
data = data.drop_duplicates()

# Encode categorical data
data = pd.get_dummies(data, columns=["species"])

# Feature scaling
scaler = StandardScaler()
data_scaled = scaler.fit_transform(data)

# Save preprocessed data
data_preprocessed = pd.DataFrame(data_scaled, columns=data.columns)

print(data_preprocessed.head())
