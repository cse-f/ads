//dijkstra algorith
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.Scanner;

public class dijkstra {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of vertices (V): ");
        int V = sc.nextInt();
        System.out.print("Enter number of edges (E): ");
        int E = sc.nextInt();
        System.out.print("Enter source node (S): ");
        int S = sc.nextInt();
        ArrayList<ArrayList<ArrayList<Integer>>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }
        System.out.println("Enter each edge in the format: <source> <destination> <weight>");
        for (int i = 0; i < E; i++) {
            int u = sc.nextInt();  // source node
            int v = sc.nextInt();  // destination node
            int w = sc.nextInt();  // weight of the edge

            ArrayList<Integer> edge1 = new ArrayList<>(Arrays.asList(v, w));
            adj.get(u).add(edge1);
        }


        Solution obj = new Solution();
        int[] res = obj.dijkstra(V, adj, S);
        System.out.println("Shortest distances from source:");
        for (int i = 0; i < V; i++) {
            System.out.print(res[i] + " ");
        }
        System.out.println();
        
        sc.close();
    }
}

class Pair {
    int node;
    int distance;

    public Pair(int distance, int node) {
        this.node = node;
        this.distance = distance;
    }
}

class Solution {
    static int[] dijkstra(int V, ArrayList<ArrayList<ArrayList<Integer>>> adj, int S) {
        PriorityQueue<Pair> pq = new PriorityQueue<>((x, y) -> x.distance - y.distance);

        int[] dist = new int[V];

        Arrays.fill(dist, (int) 1e9);

        dist[S] = 0;
        pq.add(new Pair(0, S));

        while (!pq.isEmpty()) {
            int dis = pq.peek().distance;
            int node = pq.peek().node;
            pq.poll();

            for (int i = 0; i < adj.get(node).size(); i++) {
                int adjNode = adj.get(node).get(i).get(0);
                int edgeWeight = adj.get(node).get(i).get(1);
                if (dis + edgeWeight < dist[adjNode]) {
                    dist[adjNode] = dis + edgeWeight;
                    pq.add(new Pair(dist[adjNode], adjNode));
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
