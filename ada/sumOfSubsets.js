import java.util.Scanner;

public class sumOfSubsets {

    // Function to find subsets that sum to m
    public static void sumOfSub(int[] w, int[] x, int k, int n, int s, int m, int r) {
        x[k] = 1; // Generate left child
        
        // If a subset is found
        if (s + w[k] == m) {
            printSubset(x, k, w);
        } else if (s + w[k] + w[k + 1] <= m) { // Check if left child can lead to a solution
            sumOfSub(w, x, k + 1, n, s + w[k], m, r - w[k]);
        }
        
        // Generate right child and evaluate Bk
        if ((s + r - w[k] >= m) && (s + w[k + 1] <= m)) {
            x[k] = 0; // Do not include w[k] in the subset
            sumOfSub(w, x, k + 1, n, s, m, r - w[k]);
        }
    }

    // Utility function to print the subset
    private static void printSubset(int[] x, int k, int[] w) {
        System.out.print("Subset: ");
        for (int i = 0; i <= k; i++) {
            if (x[i] == 1) {
                System.out.print(w[i] + " ");
            }
        }
        System.out.println();
    }

    // Main function
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Taking input from the user
        System.out.print("Enter the number of elements: ");
        int n = scanner.nextInt();

        int[] w = new int[n];
        System.out.println("Enter the elements (in non-decreasing order): ");
        for (int i = 0; i < n; i++) {
            w[i] = scanner.nextInt();
        }

        System.out.print("Enter the desired sum (m): ");
        int m = scanner.nextInt();

        // Initialize solution vector and calculate total sum of weights
        int[] x = new int[n];
        int total = 0;
        for (int i = 0; i < n; i++) {
            total += w[i];
        }

        System.out.println("Subsets of weights that sum to " + m + ":");
        sumOfSub(w, x, 0, n - 1, 0, m, total);

        scanner.close();
    }
}
//input and output
Enter the number of elements: 6
Enter the elements (in non-decreasing order): 
5 10 12 13 15 18
Enter the desired sum (m): 30
Subsets of weights that sum to 30:
Subset: 5 10 15 
Subset: 5 12 13 
Subset: 12 18 
