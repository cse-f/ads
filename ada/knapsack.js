import java.util.*;

class FractionalKnapsack {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        // Taking input for the number of items
        System.out.println("Enter the number of items: ");
        int n = sc.nextInt();

        double[][] items = new double[n][2];

        // Taking input for the values and weights of items
        System.out.println("Enter the value and weight of each item:");
        for (int i = 0; i < n; i++) {
            System.out.print("Item " + (i + 1) + " value: ");
            items[i][0] = sc.nextDouble(); // Value
            System.out.print("Item " + (i + 1) + " weight: ");
            items[i][1] = sc.nextDouble(); // Weight
        }

        // Taking input for the maximum capacity of the knapsack
        System.out.println("Enter the maximum capacity of the knapsack: ");
        int capacity = sc.nextInt();

        // Calculating the maximum profit
        double maxProfit = findProfit(items, capacity);

        // Printing the result
        System.out.println("Maximum Profit: " + maxProfit);
        sc.close();
    }

    public static double findProfit(double[][] items, int capacity) {
        // Sorting items by value-to-weight ratio in descending order
        Arrays.sort(items, (a, b) -> Double.compare(b[0] / b[1], a[0] / a[1]));

        double maxProfit = 0;

        for (double[] item : items) {
            if (item[1] <= capacity) {
                // If the item's weight can be completely taken
                capacity -= item[1];
                maxProfit += item[0];
            } else {
                // If only a fraction of the item can be taken
                maxProfit += item[0] * (capacity / item[1]);
                break; // Knapsack is full
            }
        }

        return maxProfit;
    }
}


//sample input and outpu
Enter the number of items: 
4
Enter the value and weight of each item:
Item 1 value: 120
Item 1 weight: 10
Item 2 value: 110
Item 2 weight: 10
Item 3 value: 100
Item 3 weight: 10
Item 4 value: 90
Item 4 weight: 10
Enter the maximum capacity of the knapsack: 
35
Maximum Profit: 375.0
