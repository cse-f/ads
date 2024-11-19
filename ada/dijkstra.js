//dijkstra algorith
import java.util.*;

public class dijkstra {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Input number of vertices, edges, and source node
        System.out.print("Enter number of vertices (V): ");
        int V = sc.nextInt();
        
        System.out.print("Enter number of edges (E): ");
        int E = sc.nextInt();
        
        System.out.print("Enter source node (S): ");
        int S = sc.nextInt();

        // Initialize adjacency list for the graph
        List<List<int[]>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        // Input the edges
        System.out.println("Enter edges (source destination weight): ");
        for (int i = 0; i < E; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();
            int w = sc.nextInt();
            adj.get(u).add(new int[]{v, w});
        }

        // Call Dijkstra's algorithm and get the result
        int[] dist = dijkstra(V, adj, S);

        // Output the shortest distances from the source
        System.out.println("Shortest distances from source:");
        for (int d : dist) {
            System.out.print(d + " ");
        }
        sc.close();
    }

    // Dijkstra's algorithm implementation
    public static int[] dijkstra(int V, List<List<int[]>> adj, int S) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[S] = 0;

        // Priority queue to pick the node with the smallest distance
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        pq.offer(new int[]{S, 0});  // {node, distance}

        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int u = current[0];
            int d = current[1];

            // If the distance is already greater, continue
            if (d > dist[u]) continue;

            // Explore all neighbors of the current node
            for (int[] neighbor : adj.get(u)) {
                int v = neighbor[0];
                int weight = neighbor[1];

                // Relaxation step
                if (dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                    pq.offer(new int[]{v, dist[v]});
                }
            }
        }

        return dist;
    }
}




//sample input and output
Enter number of vertices (V): 5
Enter number of edges (E): 7
Enter source node (S): 0
Enter each edge in the format: <source> <destination> <weight>
0 1 10
0 2 5
1 2 2
1 3 1
2 1 3
2 3 9
3 4 4
Shortest distances from source:
0 8 5 9 13
