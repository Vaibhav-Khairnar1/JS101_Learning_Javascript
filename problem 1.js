
var arr = [1, 2, 3, 4, 5];
var sum1 = 0;
var sum2 = 0;
for (var i = 0; i < arr.length; i++) {



  if (arr[i] % 2 == 0) {

    sum1 += arr[i];


  }
  else if (arr[i] % 2 !== 0) {
    sum2 += arr[i];
  }



}
if (sum1 < sum2) {
  console.log("Even");
}
else {
  console.log("Odd");
}

