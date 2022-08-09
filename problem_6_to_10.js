// 6th problem 

const fruits = ['Apple', 'Banana', 'Orange'];

// console.log(fruits.indexOf("Banana"))

fruits[1] = "Mango"

// console.log(fruits)

fruits.pop();

fruits.push("watermelon");

// console.log(fruits)

// 7th problem

const myScore = 85;
const johnScore = 67;
const tomCcore = 57;
const jeneScore =  44;
const peteScore = 55;

let score = jeneScore;
let grade;
if( score >= 80){
    grade = "Your grade is A+"
} else if (score >= 60){
    grade = "Your grade is B"
} else if(score >= 50){
    grade = "Your grade is C"
} else if(score >= 40){
    grade = "Your grade is D"
} else{
    grade = "You're fail"
}

// console.log(grade)

// 8th problem

const num1 = 13;
const num2 = 79;
const num3 = 45;
let returnValue;
if(num1 > num2 && num1 > num3){
    returnValue = `${num1} is the largest number`
} else if(num2 > num1 &&  num2 > num3){
    returnValue = `${num2} is the largest number`
} else{
    returnValue = `${num3} is the largest number`
}

// console.log(returnValue)

// 9th probelm 

const a1 = 9;
const b1 = 8;
const c1 = 9;

let returnValue2;

if(a1 === b1 && a1 !== c1){
    returnValue2 = "you can make a isoscales triangle"
} else if(b1 ===  c1 && b1 !== a1){
    returnValue2 = "you can make a isoscales triangle"
} else if(a1 === c1 && c1 !== b1){
    returnValue2 = "you can make a isoscales triangle"
} else{
    returnValue2 = "you can't make a isoscales triangle"
}

// console.log(returnValue2)

// 10th problem

const daliya = 96;
const maliya = 83;
const jalaya = 74;
const kalaya = 64;
const malaya = 53;
const palaya = 48;

const score2 = kalaya;

let returnValue3;

if(score2 >= 90){
    returnValue3 = "your grade is A+"
} else if(score2 >= 80 && score2 < 90){
    returnValue3 = "your grade is A"
} else if(score2 >= 70 && score2 < 80){
    returnValue3 = "your grade is B"
} else if(score2 >= 60 && score2 < 70){
    returnValue3 = "your grade is C"
} else if(score2 >= 50 && score2 < 60){
    returnValue3 = "your score is D"
} else{
    returnValue3 = "your score is F"
}

// console.log(returnValue3)