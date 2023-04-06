/*
 Write a function which increments the last number in a string.

  - If the string already ends with a number, the number should be incremented by 1.
  - If the string does not end with a number. the number 1 should be appended to the new string.
*/

function incrementStr(str) {
  let lastindex = str.length;
  //check if no. ends in '9'
  let endsIn9 = false;
  if (Number.isInteger(parseInt(str.charAt(lastindex - 1))) == true) {
      let endsIn9I = Number.parseInt(str.charAt(lastindex - 1));
      endsIn9 = endsIn9I == 9 ? true : false;

  }
  //check where to slice to get all nums at the end
  let indexToSliceFrom = lastindex;
  for (let i = 0; i < lastindex; i++) {

      let lastLetter = str.charAt(lastindex - 1 - i);
      let lastNumber = Number.parseInt(lastLetter);

      if (Number.isInteger(lastNumber) != true) {
          break;
      }

      indexToSliceFrom = lastindex - 1 - i; //this is index of the number

  }

  let res = "";

  if (endsIn9 == false) {

      let lastNumber = Number.parseInt(str.charAt(lastindex - 1));

      if (Number.isInteger(lastNumber) == true) {
          substring = str.slice(0, lastindex - 1);
          res = substring.concat((lastNumber + 1).toString());
      }
      else if (Number.isNaN(lastNumber) == true) {
          res = str.concat("1");
      }
      return res;
  } else if (endsIn9 == true) {


      let precedingZeroIndex = 0;
      for (let i = 0; i < lastindex; i++) {

          let lastLetter = str.charAt(lastindex - 1 - i);
          let lastNumber = Number.parseInt(lastLetter);

         

          if (Number.isInteger(lastNumber) != true) {
              precedingZeroIndex = lastindex - 1; //this is index of the number
              let lastNumber = Number.parseInt(str.slice(precedingZeroIndex));
              substring = str.slice(0, precedingZeroIndex);
              res = substring.concat((lastNumber + 1).toString());
              break;
          } else if (lastLetter == 0) {
              precedingZeroIndex = lastindex - i;
              let lastNumber = Number.parseInt(str.slice(precedingZeroIndex));
              substring = str.slice(0, precedingZeroIndex - 1);
              res = substring.concat((lastNumber + 1).toString());
              break;
          }



      }

      return res;
  }

}

console.log(incrementStr('dc')) // expected result - dc1
console.log(incrementStr('digiCat23')) // expected result - digiCat24
console.log(incrementStr('digiCat0042')) // expected result - digiCat0043
console.log(incrementStr('dc9')) // expected result - dc10
console.log(incrementStr('dc099')) // expected result - dc100
console.log(incrementStr('digi4cat5')) // expected result - digi4cat6
