function diagonalDifference(arr) {
  // Write your code here
  //diagonal1=arr[0][0]+arr[1][1]+arr[2][2]
  //             [i][i]    [i][i]    [i][i]
  //diagonal2=arr[0][2]+arr[1][1]+arr[2][0]
  //             [i][i2]   [i][i2]   [i][i2]
  var diagonal1=0
  var diagonal2=0
  var i2=arr.length-1
  //diagonal sum
  for(let i=0;i<arr.length;i++){
      diagonal1+=arr[i][i]
      diagonal2+=arr[i][i2]
      i2--
  }
  //return the difference   
  if(diagonal1>diagonal2){
      return diagonal1-diagonal2
  }else if(diagonal2>diagonal1){
      return diagonal2-diagonal1
  }else if(diagonal1==diagonal2){
      return 0
  }
}