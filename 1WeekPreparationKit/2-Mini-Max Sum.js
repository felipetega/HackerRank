var max=arr[0]
var min=arr[0]
var sum=0
for(var i=0;i<5;i++){
    if (arr[i]>max){
        max=arr[i]
    }
    else if (arr[i]<min){
        min=arr[i]
    }
    sum+=arr[i]
}
console.log(sum-max,sum-min)