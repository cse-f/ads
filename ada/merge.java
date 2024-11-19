//merge sort
import java.util.*;
class mergeAlgo{
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		int[] a={2322,234,2,3,4,2,34,3,5,435,34};
		int n=a.length;
		mergeSort(a,n,0,n-1);
		System.out.println(Arrays.toString(a));

	}
	public static void mergeSort(int[] a,int n,int low,int high){
		if(low>=high)return;
		else{
			int mid=(low+high)/2;
			mergeSort(a, n, low, mid);
			mergeSort(a, n, mid+1, high);
			merge(a,n,low,high,mid);
		}
	}
	public static void merge(int[] a,int n,int low,int high,int mid){
		int[] b=new int[high-low+1];
		int i=low,j=mid+1;
		int k=0;
		while(i<=mid && j<=high){
			if(a[i]<a[j]){
				b[k++]=a[i++];
			}
			else{
				b[k++]=a[j++];
			}
		}
		while(i<=mid){
			b[k++]=a[i++];
		}
		while(j<=high){
			b[k++]=a[j++];
		}
		for(i=low;i<=high;i++){
			a[i]=b[i-low];
		}

	}
}
