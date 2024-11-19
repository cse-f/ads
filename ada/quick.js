//quick algorithm
import java.util.*;

public class qickAlgo {
    public static void main(String[] args) {
        int[] a={2322,234,2,3,4,2,34,3,5,435,34};
        int n=a.length;
        quickSort(a,n,0,n-1);
        System.out.println(Arrays.toString(a));
    }
    public static void quickSort(int[] a,int n,int low,int high){
        if(low<high){
            int p=partition(a, n, low, high);
            quickSort(a, n, low, p-1);
            quickSort(a, n, p+1, high);
        }
    }
    public static int partition(int[] a,int n, int low,int high){
        int i=low,j=high;
        int pivot=low;
        while(i<j){
            while(a[i]<=a[pivot] && i<=high-1)i++;
            while(a[j]>a[pivot] && j>=low+1)j--;
            if(i<j){
                int temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
        int temp=a[low];
        a[low]=a[j];
        a[j]=temp;
        return j;
    }

}
