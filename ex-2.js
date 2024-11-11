function countPositivesSumNegatives(input) {
  let result = [0,0];
  //Start coding here

  for(i of input){

    if (i>0){result[0]+=1}
    else if (i<0){result[1]+=i}  
    else {return result = [];}

  }
   return result;
  
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []

//ทำไม่เสร็จค้าบ