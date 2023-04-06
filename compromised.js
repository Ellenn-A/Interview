/*
  You are given an array (length >= 3, could be very large) containing integers.
  The array is either entirely odd integers or entirely even integers except for a single integer N.
  
  Write a method that takes the array as an argument and returns this 'outlier' N.
*/

function findCompromised(arr) {
  // implement your solution here
  let isOdd = 0;
  let isEven = 0;
  let res;
  
 for (let i = 0; i < 3; i++){
 let int = arr[0]%2==0;
if (int ==0){
  isEven++;
}else{
  isOdd ++;
}

if (isOdd >=2){
  //looking for even num 
  for (let i = 0; i<arr.length; i++){
    if(arr[i]%2==0){
res = arr[i];
    }

  }
}
else if (isEven>= 2){
  for (let i = 0; i<arr.length; i++){
    if(arr[i]%2!=0){
res = arr[i];
    }

  }
}

 }



  return res;
}

console.log(findCompromised([2, 4, 0, 100, 4, 11, 2602, 36, 22, 2, 4, 10, -20, -10300])) // expected result - 11 (the only odd number)
console.log(findCompromised([160, 3, 1719, 19, 11, 13, -21, -1, 20001])) // expected result - 160 (the only even number)
