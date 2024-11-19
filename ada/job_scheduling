//job scheduling
import java.util.*;

public class JobScheduling {
    public static void printJobScheduling(String[][] arr, int t) {
          Arrays.sort(arr,(job1,job2)->Integer.compare(Integer.parseInt(job2[2]), Integer.parseInt(job1[2])));
          boolean[] result=new boolean[t];
          String[] job=new String[t];
          Arrays.fill(job, "-1");

          for(String[] jobSet:arr){
            for(int i=Math.min(t-1,Integer.parseInt(jobSet[1])-1);i>=0;i--){
                if(!result[i]){
                    result[i]=true;
                    job[i]=jobSet[0];
                    break;
                }
            }
          }
          System.out.println(Arrays.toString(job));
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
    
        // Input number of jobs
        System.out.print("Enter the number of jobs: ");
        int n = scanner.nextInt();
        scanner.nextLine(); // Consume newline
    
        // Input time slots
        System.out.print("Enter the maximum number of time slots: ");
        int t = scanner.nextInt();
        scanner.nextLine(); // Consume newline
    
        // Input job details
        String[][] arr = new String[n][3];
        System.out.println("Enter job details (name deadline profit) for each job:");
        for (int i = 0; i < n; i++) {
            System.out.print("Job " + (i + 1) + ": ");
            arr[i][0] = scanner.next(); // Job name
            arr[i][1] = scanner.next(); // Deadline
            arr[i][2] = scanner.next(); // Profit
        }
    
        System.out.println("Following is the maximum profit sequence of jobs:");
        printJobScheduling(arr, t);
        scanner.close();
    }
}

//sample input and output
Enter the number of jobs: 5
Enter the maximum number of time slots: 3
Enter job details (name deadline profit) for each job:
Job 1: a
2
100
Job 2: b
1
19
Job 3: c
2
38
Job 4: d
1
27
Job 5: e
3
52
Following is the maximum profit sequence of jobs:
[c, a, e]
