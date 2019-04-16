// Question 1
// Write the function printInt(n) 
// taking one parameter n and print all natural numbers 
// from 1 to n in console.
function printInt(n) {
  for(var i=1;i<=n;i++){
    console.log(i);
  }
}

// printInt(10);
// printInt(13);

// Question 2
// Write the function printIntRev(n) taking one parameter n and  
// print all natural numbers in reverse in console (from n to 1).
function printIntRev(n) {
  for(var x=n;x>=1;x--){
    console.log(x);
  }
}

// printIntRev(22);

// Question 3
// Write the function checkInput(x) taking one parameter x and 
// return the string ‘number’ if x is a number; 
// return the string ‘string’ if x is a string; 
// and return ‘boolean’ if x is a boolean. Otherwise returns -1. 
function  checkInput(x) {
  // if(typeof x === "number") {
  //   return typeof x
  // } else if (typeof x === "string") {
  //   return typeof x
  // } else if (typeof x === "boolean") {
  //   return typeof x
  // } else {
  //   return -1;
  // }
  if (typeof x === "number" || typeof x === "string" || typeof x ==="boolean") {
    return typeof x;
  } else {
    return -1;
  }
}

// console.log(checkInput(132));
// console.log(checkInput("132"));
// console.log(checkInput(false));
// console.log(checkInput([132, 122, 222]));

// Question 4
// Write the function simpleEvenAdding(num) 
// taking a number and add up all the even numbers from 1 to num. 
function simpleEvenAdding(num) {

  // Store the answer
  var solution = 0;

  // // Loop from 1 to num
  // for(var i=1; i<=num;i++){
  //   // check if i is even number
  //   if(i % 2 === 0) {
  //     solution += i;
  //   }
  // }
  for(var i=0;i<=num;i+=2) {
      solution += i;
  }
  return solution;
}

// console.log(simpleEvenAdding(12));

// Question 5
// Write the function letterCapitalize(str) taking a string and 
// capitalize the first letter of each word. 
// The given words will be separated by only one space.
function letterCapitalize(str) {
  
  // seperate each word inside str
  var words = str.split(" ");

  // Store the answer
  var solution = "";

  // find the first character in each word
  for(var i=0;i<words.length;i++){
    var upperWord = words[i].replace(words[i][0], words[i][0].toUpperCase());
    solution += " " + upperWord;
  }
  return solution.slice(1);
}

// console.log(letterCapitalize("you cannnot find answer online"));

// Question 6
// Write the function simpleReverse(str) 
// taking a string and return the string in reversed order. 
function simpleReverse(str){
  // transfer str into array
  var strArray = str.split("");
  // revere the array
  var revArray = strArray.reverse();

  // transfer array back to string
  return revArray.join("");
}

// console.log(simpleReverse("Good Morning"));

// Question 7
// Write the function findDiff(arr) taking an array of numbers 
// as parameter and return the difference between 
// the maximum number and the minimum number (max - min). 
function findDiff(arr) {
  // find maximum number
  var max = Math.max(... arr);

  // find minmum number
  var min = Math.min(... arr);

  // find max - min
  return max - min;
}

// console.log(findDiff([1,2,3,5,4,10,2]));

// Question 8
// Write the function timeConvert(num) 
// taking a number as parameter and 
// return the number of hours and minutes the parameter converts to. 
// Separate the number of hours and minutes with a colon.
function timeConvert(num) {
  // getting the hour
  var hour = parseInt(num/60);
  // getting the minutes
  var minutes = num % 60
  // combine the answer
  return hour + ":" + minutes
}

// console.log(timeConvert(123));
// console.log(timeConvert(59));

// Question 9
// Write the function findStr(str, long) taking two strings 
// as parameters and return how many str you can find in long. 
// Assume Str is not empty string.
function findStr(str, long) {
  var splitedArray = long.split(str);
  return splitedArray.length - 1;
}

// Question 10
// Write the function selfDividingNumbers(left, right) 
// taking two number bound as parameters and 
// returns an array of every possible self dividing number between 
// them, including the bounds. 
function selfDividingNumbers(left, right){
  // store the answer
  var solution = [];
  for(var i=left;i<=right;i++){
    if(isSelfDividing(i)){
      solution.push(i)
    }
  }
  return solution;
}


function isSelfDividing(num) {
  var digits = num.toString().split("");
  
  for(var i=0; i< digits.length; i++){
    if(num % digits[i] !== 0) {
      return false;
    }
  }

  return true;
}

// console.log(selfDividingNumbers(1,22));

// Question 11
// Write the function moveZeros(nums) taking an array of numbers and 
// move all 0’s to the end of it 
// while maintaining the relative order of the non-zero elements.  
function moveZeros(nums) {
  // count number of 0s
  var counter = 0;

  // store the solution array
  var solution = [];

  for(var i=0;i<nums.length;i++){
    if(nums[i] === 0){
      counter++;
    } else {
      solution.push(nums[i]);
    }
  }

  // adding 0s
  for(var j=counter;j>0;j--){
    solution.push(0);
  }
  return solution;
}

// console.log(moveZeros([1,0,21,4,0,0,4]));

// Question
// Create an average() function that calculates the average of an array of numbers.
function average(nums) {
  if (nums.length === 0) {
    return 0;
  } 
  // adding up all numbers
  var sum = 0;
  for(var i=0;i<nums.length;i++){
    sum += nums[i];
  }
  // divide by its length
  return sum / nums.length
}

console.log(average([]));