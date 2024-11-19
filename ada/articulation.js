//articulation points
import java.io.*;
import java.util.*;

class Solution {
    private int timer = 1;
    private void dfs(int node, int parent, int[] vis,
                     ArrayList<ArrayList<Integer>> adj, int tin[], int low[],
                     List<List<Integer>> bridges) {
        vis[node] = 1;
        tin[node] = low[node] = timer;
        timer++;
        for (Integer it : adj.get(node)) {
            if (it == parent) continue;
            if (vis[it] == 0) {
                dfs(it, node, vis, adj, tin, low, bridges);
                low[node] = Math.min(low[node], low[it]);
                if (low[it] > tin[node]) {
                    bridges.add(Arrays.asList(it, node));
                }
            } else {
                low[node] = Math.min(low[node], low[it]);
            }
        }
    }
    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        ArrayList<ArrayList<Integer>> adj =
            new ArrayList<ArrayList<Integer>>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<Integer>());
        }
        for (List<Integer> it : connections) {
            int u = it.get(0); int v = it.get(1);
            adj.get(u).add(v);
            adj.get(v).add(u);
        }
        int[] vis = new int[n];
        int[] tin = new int[n];
        int[] low = new int[n];
        List<List<Integer>> bridges = new ArrayList<>();
        dfs(0, -1, vis, adj, tin, low, bridges);
        return bridges;
    }
}

class ArticulationPoints {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    
        // Input number of nodes and edges
        System.out.println("Enter the number of nodes:");
        int n = sc.nextInt();
        System.out.println("Enter the number of edges:");
        int m = sc.nextInt();
    
        // Input edges
        List<List<Integer>> connections = new ArrayList<>();
        System.out.println("Enter the edges (u v) one per line:");
        for (int i = 0; i < m; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            connections.add(Arrays.asList(u, v));
        }
    
        // Solve using Tarjan's Algorithm
        Solution obj = new Solution();
        List<List<Integer>> bridges = obj.criticalConnections(n, connections);
    
        // Output the bridges
        System.out.println("Bridges in the graph:");
        for (List<Integer> bridge : bridges) {
            System.out.println(bridge.get(0) + " " + bridge.get(1));
        }
    
        sc.close();
    }
}


//sample input output
Enter the number of nodes:
4
Enter the number of edges:
4
Enter the edges (u v) one per line:
1
0
1
3
1
2
2
0
Bridges in the graph:
3 1
