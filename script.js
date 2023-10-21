//! chapter 35-38

// 1)
/*function date(){
let today= new Date()
document.write(today)
}
date()*/

//2)

/*function greet(fname,lname){
let fullName = fname + ' ' + lname
let greet = "Welcome " + fullName
return greet
}

let firstname = prompt("Enter First Name")
let lastname = prompt("Enter Last Name")
let message = greet(firstname, lastname)
document.write(message)*/

//3)

/*function sum(a,b){
  add=a+b
  return add
}
var num1=+prompt("Enter 1st number")
var num2=+prompt("Enter 2nd number")
var sum= sum(num1,num2)
document.write("The sum of "+num1+" and "+num2+" is "+sum)*/

//4)

/*function calculate(num1,num2,operator){
  if(operator=="+"){
    add=num1+num2
    return(num1+"+"+num2+"="+add)
  }
  else if(operator=="-"){
    sub=num1-num2
    return(num1+"-"+num2+"="+sub)
  }
  else if(operator=="*"){
    mul= num1*num2
    return(num1+"*"+num2+"="+mul)
  }
  else if (operator=="/") {
    div=num1/num2
    return(num1+"/"+num2+"="+div)
  }
  else{
    return "invalid Opertor"
  }


}
var num1=+prompt("Enter 1st Number")
var operator=prompt("Enter Operator (+,-,*,/)")
var num2=+prompt("Enter 2nd Number")
var result=calculate(num1,num2,operator)
document.write(result)*/


// 5)

/*function square(number) {
  return number * number;
}

var num =+prompt("Enter Number to print its square");
var result = square(num);
document.write("The square of " + num + " is " + result)*/

// 6)

/*function factorial(number) {
  if(number<0){
    return "Undefined (Factorial is not defined for negative numbers)";
  }
  else if(number == 0 || number ==1){
    return 1
  }
  else{
    return number*factorial(number-1)
}
}
var num=+prompt("Enter Number to print its factorial")
let result = factorial(num);
document.write("The factorial of "+num+" is "+result)*/

//7)
/*var start=+prompt("Enter start number")
var end=+prompt("Enter end number")

function counting(start, end) {
  if (start <= end) {
    for (let i = start; i <= end; i++) {
      document.write(i)
      document.write("<br>")
    }
  } else {
    for (let i = start; i >= end; i--) {
      document.write(i)
      document.write("<br>")
    }
  }
}
counting(start,end)*/

// 8)

/*function CalculateHypotenuse(base, perpendicular) {
  function calculatesquare(number) {
    return number * number;
  }

  var base = calculatesquare(base);
  var perpendicular = calculatesquare(perpendicular);

  var hypotenuse= base + perpendicular;
  var hypotenuse = Math.sqrt(hypotenuse);

  return hypotenuse;
}

var base=+prompt("Enter Base")
var perp=+prompt("Enter Perpendicular")
var result = Number(CalculateHypotenuse(base, perp))
var hyp=result.toFixed(2)
document.write("Hypotenuse:", hyp)*/


// 9)

/*function Area(width, height) {
  return width * height;
}

var area1 = Area(5, 10);
document.write("Area with values: ", area1);
document.write("<br>")

a=5
b=10
var area2= Area(a,b)
document.write("Area with variables: ", area2)*/

// 10)

/*function Palindrome(str) {

  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}


const String =prompt("Enter string");
const result = Palindrome(String);

if (result) {
  document.write(`"${String}" is a palindrome.`);
} else {
  document.write(`"${String}" is not a palindrome.`);
}*/

// 11)

/*function capitalizedWords(inputString) {

  let words = inputString.split(' ');
  let capitalizedWords = words.map(word =>{
    if(word.length>0){
      return word[0].toUpperCase() + word.slice(1);
    }
    return word;
  })
  let capitalizedStrings = capitalizedWords.join(' ');
    return capitalizedStrings;
}
let inputString = prompt("Write test string")
let result = capitalizedWords(inputString);
document.write(result);*/

// 12)

/*function findLongestWord(inputString) {
  const words = inputString.split(" ");
  
  let longestWord = "";
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  }

  return longestWord;
}

var inputString = "Web Development Tutorial";
const longest = findLongestWord(inputString);
console.log(`The longest word is: ${longest}`);*/

// 13)

/*function countLetterOccurrences(inputString, letter) {
  let count = 0;

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === letter) {
      count++;
    }
  }

  return count;
}

// Example usage:
var inputString = 'JSResourceS.com';
var inputString=inputString.toLowerCase()
var letterToCount = 'o';
var occurrences = countLetterOccurrences(inputString, letterToCount);
document.write(`The letter '${letterToCount}' appears ${occurrences} times in the string.`)*/

//14)
/*function Circumference(radius) {
  var circumference = 2 * Math.PI * radius;
  document.write(`The circumference is ${circumference.toFixed(2)}`);
}
function Area(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  document.write(`The area is ${area.toFixed(2)}`);
}

var radius=+prompt("Enter radius")
Circumference(radius);
document.write("<br>")
Area(radius)*/
