// 28 problem
/* 
function make_avg(numbers){
    let sum = 0;
    for(i = 0; i < numbers.length; i++){
        const number = numbers[i];
        sum += number;
    }
    const avg = sum / numbers.length;
    return avg;
}

const intNumbers = [343, 534, 133, 454, 543, 132, 533, 644, 754];

const avgNumber = make_avg(intNumbers);

console.log(avgNumber);
 */

// 29 problem 

function findEvenOdd(number){
    let text1;
    if(number % 2 === 0){
        text1 = `${number} is a even number`
    } else{
        text1 = `${number} is a odd number`
    }
    // console.log(text1)
}

// findEvenOdd(10);

// 32 problem

function makeUperCase(text){
    const text1 = text.toUpperCase();
    const text2 = text1.toLowerCase();
    return text2;
}

const text1 = "Tahdi Islam";

// console.log(makeUperCase(text1))


// 67 problem

const myPhone = {
    name: 'Realme',
    price: '14000',
    storage: "64/4",
    color: 'blue'
}

myPhone['color'] = "green";

// console.log(myPhone)

// 69 problem

function centimeterToMeter(centimeter){
    let meter = centimeter / 100;
    return meter;
}

const centiValue = 5000;
const makeMeter = centimeterToMeter(centiValue);

// console.log(makeMeter)

// 70 problem 

function bookTotalPage(a, b, c){
    const book1 = 100;
    const book2 = 200;
    const book3 = 300;
    const book1Page = book1 * a;
    const book2Page = book2 * b;
    const book3Page = book3 * c;
    const totalPage = book1Page + book2Page + book3Page;
    return totalPage;
}

// console.log(bookTotalPage(10, 50, 100));

// 71 problem

const friendName2 = ['zahid', 'roni', 'sakib', 'ibrahim', 'rayhan', 'faku', 'omor'];

function findLargestName(friendName){
    let largestName = friendName[0];
    for(i = 0; i < friendName.length; i++){
        let friendName2 = friendName[i];
        if(friendName2.length > largestName.length){
            largestName = friendName2;
        }
    }
    return largestName;
}

// console.log(findLargestName(friendName2))

// 72 problem

const numbers = [765, 233, 532, 2234, 24, 456, 234, 243, 82, 3, -33, 75, - 65, 34];

function takePositiveNumber(numbers){
    let posNum = [];
    for(i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if(number < 0){
            break;
        } else if(number >= 0){
            posNum.push(number);
        }
    }
    return posNum;
}

// console.log(takePositiveNumber(numbers));