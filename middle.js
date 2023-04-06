/*
  Implement a solution that returns the middle character(s) of a string.
  
  - If the string's length is even, return the middle 2 characters.
  - If the string's length is 1, return itself.
*/

function getMiddle(str) {
  // implement your solution here
  let len = str.length;
   if (len == 1 ){
    return str;

   }else if (len%2==0) {
  let first = (len/2)-1;
  let second = first +2;
  return str.substring(first,second) ;
   }
   else if (len%2==1){
    let middle = Math.floor(len/2);
   return str.charAt(middle);
   }else{
    console.log("Error ");
   }

}

console.log(getMiddle('test')) // expected result - 'es'
console.log(getMiddle('testing')) // expected result - 't'
console.log(getMiddle('middle')) // expected result - 'dd'
console.log(getMiddle('A')) // expected result - 'A'




test('gets middle', () => {
  expect(getMiddle('test')).toBe('es');
});