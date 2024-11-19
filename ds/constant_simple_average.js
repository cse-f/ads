import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Sample time series data
data = {"Time": range(1, 11), "Value": [10, 12, 14, 16, 18, 20, 22, 24, 26, 28]}

df = pd.DataFrame(data)
print("Original Data:")
print(df)

# Calculate the constant average
constant_avg = df["Value"].mean()
print("\nConstant Average:", constant_avg)

# Calculate the simple moving average with a window size of 3
window_size = 3
df["SMA"] = df["Value"].rolling(window=window_size).mean()
print("\nData with Simple Moving Average (SMA):")
print(df)

# Plot the original data, constant average, and simple moving average
plt.figure(figsize=(10, 6))
plt.plot(df["Time"], df["Value"], label="Original Data", marker="o")
plt.axhline(y=constant_avg, color="r", linestyle="--", label="Constant Average")
plt.plot(df["Time"], df["SMA"], label="Simple Moving Average (SMA)", marker="o")

plt.xlabel("Time")
plt.ylabel("Value")
plt.title("Constant Average and Simple Moving Average")
plt.legend()
plt.grid(True)
plt.show()
