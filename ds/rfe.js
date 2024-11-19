from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_selection import RFE
from sklearn.metrics import accuracy_score, classification_report

# Load Iris dataset
data = load_iris()
X, y = data.data, data.target

# Split dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Original model without dimensionality reduction
original_model = RandomForestClassifier(random_state=42)
original_model.fit(X_train, y_train)
y_pred_original = original_model.predict(X_test)

# Evaluate the original model
print("Original Model Performance:")
print(f"Accuracy: {accuracy_score(y_test, y_pred_original):.4f}")
print(classification_report(y_test, y_pred_original))

# Apply Recursive Feature Elimination (RFE) for dimensionality reduction
n_features_to_select = 2  # Reduce to 2 features
rfe = RFE(estimator=RandomForestClassifier(random_state=42), n_features_to_select=n_features_to_select)
rfe.fit(X_train, y_train)

# Transform the dataset using selected features
X_train_rfe = rfe.transform(X_train)
X_test_rfe = rfe.transform(X_test)

# Train a model on the reduced dataset
reduced_model = RandomForestClassifier(random_state=42)
reduced_model.fit(X_train_rfe, y_train)
y_pred_reduced = reduced_model.predict(X_test_rfe)

# Evaluate the reduced model
print("\nReduced Model Performance:")
print(f"Accuracy: {accuracy_score(y_test, y_pred_reduced):.4f}")
print(classification_report(y_test, y_pred_reduced))

# Compare features selected by RFE
selected_features = [data.feature_names[i] for i in range(len(data.feature_names)) if rfe.support_[i]]
print("\nSelected Features after RFE:", selected_features)
