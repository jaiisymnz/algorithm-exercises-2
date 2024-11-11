function fizzBuzz(n) {
  //Start coding here
  let result = [];
  for (let index = 0; index < n; index++) {
    if ((index + 1) % 3 == 0 && (index + 1) % 5 == 0)  {
      result.push("FizzBuzz");
    } else if ((index + 1) % 5 == 0) {
      result.push("Buzz");
    } else if ((index + 1) % 3 == 0 ) {
      result.push("Fizz");
    } else result.push(index + 1);

    console.log(result);
  }

  return result;
}

let result1 = fizzBuzz(3);
console.log(result1); // ["1","2","Fizz"]

let result2 = fizzBuzz(5);
console.log(result2); // ["1","2","Fizz","4","Buzz"]

let result3 = fizzBuzz(15);
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
