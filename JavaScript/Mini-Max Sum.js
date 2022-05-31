function miniMaxSum(arr) {
    // Write your code here
    var max=0
    var min=0
    var total=0
    for(let i = 0;i<5;i++){
        if(arr[i]>max){
            max=arr[i]
        }if(min==0){
            min=arr[i]
        }else if(arr[i]<min){
            min=arr[i]
        }
        total+=arr[i]
    }
    console.log(total-max,total-min)
}