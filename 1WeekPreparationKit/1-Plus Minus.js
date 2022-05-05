var zero = 0
var positive = 0
var negative = 0
    for (var i = 0; i<arr.length;i++){
        if (arr[i]==0){
            zero+=1
        }else if(arr[i]>0){
            positive+=1
        }else if(arr[i]<0){
            negative+=1
        }
    }
    console.log(positive/arr.length)
    console.log(negative/arr.length)
    console.log(zero/arr.length)