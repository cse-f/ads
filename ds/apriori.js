import pandas as pd
from mlxtend.preprocessing import TransactionEncoder
from mlxtend.frequent_patterns import apriori, association_rules

def main():
    # Define a new set of transactions (could represent a store's transaction data)
    transactions = [
        ["milk", "bread", "eggs", "butter"],
        ["bread", "butter", "cheese"],
        ["milk", "bread", "butter", "eggs"],
        ["bread", "eggs", "cheese"],
        ["milk", "butter", "cheese"],
        ["milk", "bread", "eggs"],
        ["milk", "cheese"],
        ["bread", "butter"],
        ["milk", "bread", "cheese"],
        ["eggs", "cheese"]
    ]

    # Encode transactions into a binary matrix using TransactionEncoder
    te = TransactionEncoder()
    te_ary = te.fit(transactions).transform(transactions)
    df = pd.DataFrame(te_ary, columns=te.columns_)

    # Generate frequent itemsets with a flexible support threshold
    min_support_value = 0.5  # Can adjust support threshold here
    frequent_itemsets = apriori(df, min_support=min_support_value, use_colnames=True)

    # Add the support count column (can be helpful to visualize how many transactions the itemsets appear in)
    frequent_itemsets["support_count"] = frequent_itemsets["support"] * len(df)

    # Generate association rules with an adjustable confidence threshold
    min_confidence_value = 0.7  # Can adjust confidence threshold here

    # Call association_rules and add num_itemsets=10 if needed
    rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=min_confidence_value, num_itemsets=10)

    # Optionally filter rules based on additional metrics like lift (optional)
    rules_filtered = rules[rules['lift'] > 1.2]  # Filter rules with lift greater than 1.2, for example

    # Print the frequent itemsets and the association rules
    print(f"Frequent Itemsets (Support >= {min_support_value}):\n", frequent_itemsets)
    print(f"\nAssociation Rules (Confidence >= {min_confidence_value}):\n", rules)
    print(f"\nFiltered Association Rules (Lift > 1.2):\n", rules_filtered)


if __name__ == "__main__":
    main()
