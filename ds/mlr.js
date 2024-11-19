import matplotlib.pyplot as plt
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.preprocessing import StandardScaler

def main():
    # Load the dataset
    age_data = pd.read_csv('/content/sample_data/Age_Prediction_Dataset.csv')

    # One-hot encode the categorical columns 'skin_texture' and 'hair_color'
    age_data = pd.get_dummies(age_data, columns=['skin_texture', 'hair_color'], drop_first=True)

    # Define features (X) and target (y)
    X = age_data.drop(columns=['age'])  # All columns except 'age' are features
    y = age_data['age']  # 'age' is the target variable

    # Scale the numerical features
    numerical_features = [ 'jawline_sharpness']
    scaler = StandardScaler()
    X[numerical_features] = scaler.fit_transform(X[numerical_features])

    # Split the dataset into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Initialize the Linear Regression model
    model = LinearRegression()

    # Train the model
    model.fit(X_train, y_train)

    # Make predictions on the test set
    y_pred = model.predict(X_test)

    # Output the results
    print("Multiple Linear Regression Results (All Columns)")
    print(f"Mean Squared Error: {mean_squared_error(y_test, y_pred):.2f}")
    print(f"Coefficient of Determination (R²): {r2_score(y_test, y_pred):.2f}")

    # Plotting Actual vs Predicted
    plt.figure(figsize=(8, 6))
    plt.scatter(y_test, y_pred, color="blue", edgecolor="k", alpha=0.7)
    plt.plot([y.min(), y.max()], [y.min(), y.max()], color="red", linewidth=2)
    plt.xlabel("Actual Age")
    plt.ylabel("Predicted Age")
    plt.title("Actual vs Predicted Age (Using All Features)")
    plt.legend(["Perfect Prediction", "Predictions"])
    plt.show()

if __name__ == "__main__":
    main()
