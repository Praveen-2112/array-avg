var a=[45,67,23,44,5,78,90,23,12];
var sum=0,average;
for (let i=0;i<a.length;i++)
{
	sum=sum+a[i];
	average=sum/a.length;
}
document.write("Average of numbers in array is "+" "+average)