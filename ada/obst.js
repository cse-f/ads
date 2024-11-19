import java.util.Scanner;

public class OptimalBinarySearchTree {

    public static void optimalSearchTree(int[] keys, double[] p, double[] q, int n) {
        double[][] w = new double[n + 1][n + 1]; // Weight array
        double[][] c = new double[n + 1][n + 1]; // Cost array
        int[][] r = new int[n + 1][n + 1];       // Root array

        // Step 1: Initialize w, c, and r for single-node trees and failures
        for (int i = 0; i <= n; i++) {
            w[i][i] = q[i];
            c[i][i] = 0;
            r[i][i] = 0;
            if (i < n) {
                w[i][i + 1] = q[i] + q[i + 1] + p[i];
                c[i][i + 1] = w[i][i + 1];
                r[i][i + 1] = i + 1;
            }
        }

        // Step 2: Compute optimal trees for subranges of increasing length
        for (int m = 2; m <= n; m++) { // m is the length of the subrange
            for (int i = 0; i <= n - m; i++) {
                int j = i + m; // Range [i, j]
                w[i][j] = w[i][j - 1] + p[j - 1] + q[j];
                c[i][j] = Double.MAX_VALUE;

                // Use Knuth's optimization to find the best root
                for (int k = r[i][j - 1]; k <= r[i + 1][j]; k++) {
                    double cost = c[i][k - 1] + c[k][j] + w[i][j];
                    if (cost < c[i][j]) {
                        c[i][j] = cost;
                        r[i][j] = k;
                    }
                }
            }
        }

        // Output the results
        System.out.println("Cost of Optimal BST: " + c[0][n]);
        System.out.println("Weight of Optimal BST: " + w[0][n]);
        System.out.println("Root of Optimal BST: " + r[0][n]);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number of keys: ");
        int n = sc.nextInt();

        int[] keys = new int[n];
        double[] p = new double[n];
        double[] q = new double[n + 1];

        System.out.println("Enter the keys: ");
        for (int i = 0; i < n; i++) {
            keys[i] = sc.nextInt();
        }

        System.out.println("Enter the successful search probabilities: ");
        for (int i = 0; i < n; i++) {
            p[i] = sc.nextDouble();
        }

        System.out.println("Enter the unsuccessful search probabilities: ");
        for (int i = 0; i <= n; i++) {
            q[i] = sc.nextDouble();
        }

        sc.close();

        // Call the function
        optimalSearchTree(keys, p, q, n);
    }
}


//sample input output
Enter the number of keys: 3
Enter the keys: 
10
12
20
Enter the successful search probabilities: 
0.34 0.08 0.50
Enter the unsuccessful search probabilities: 
0.05 0.02 0.03 0.04
Cost of Optimal BST: 1.71
Weight of Optimal BST: 1.06
Root of Optimal BST: 3
