//prims algorithm
import java.util.*;

class prims {
    private int V;
    private int[][] graph;

    public prims(int vertices) {
        this.V = vertices;
        this.graph = new int[vertices][vertices];
    }

    public void printMST(int[] parent) {
        System.out.println("Edge \tWeight");
        for (int i = 1; i < V; i++) {
            System.out.println(parent[i] + " - " + i + "\t" + graph[i][parent[i]]);
        }
    }

    public int minKey(int[] key, boolean[] mstSet) {
        int min = Integer.MAX_VALUE;
        int min_index = -1;

        for (int v = 0; v < V; v++) {
            if (key[v] < min && !mstSet[v]) {
                min = key[v];
                min_index = v;
            }
        }
        return min_index;
    }

    public void primMST() {
        int[] key = new int[V];
        int[] parent = new int[V];
        Arrays.fill(key, Integer.MAX_VALUE);
        key[0] = 0;
        boolean[] mstSet = new boolean[V];
        parent[0] = -1;

        for (int cout = 0; cout < V; cout++) {
            int u = minKey(key, mstSet);
            mstSet[u] = true;

            for (int v = 0; v < V; v++) {
                if (graph[u][v] > 0 && !mstSet[v] && key[v] > graph[u][v]) {
                    key[v] = graph[u][v];
                    parent[v] = u;
                }
            }
        }

        printMST(parent);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
    
        // Input number of vertices
        System.out.print("Enter the number of vertices in the graph: ");
        int vertices = scanner.nextInt();
    
        prims g = new prims(vertices);
    
        // Input adjacency matrix
        System.out.println("Enter the adjacency matrix (use 0 for no edge): ");
        for (int i = 0; i < vertices; i++) {
            for (int j = 0; j < vertices; j++) {
                g.graph[i][j] = scanner.nextInt();
            }
        }
    
        // Display the result
        System.out.println("Minimum Spanning Tree:");
        g.primMST();
    
        scanner.close();
    }
    
}

//sample input and output

Enter the number of vertices in the graph: 5
Enter the adjacency matrix (use 0 for no edge): 
0 2 0 6 0
2 0 3 8 5
0 3 0 0 7
6 8 0 0 9
0 5 7 9 0
Minimum Spanning Tree:
Edge    Weight
0 - 1   2
1 - 2   3
0 - 3   6
1 - 4   5
