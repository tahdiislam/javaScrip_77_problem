// 1st ==> make a multiplication table

function multi(number){
    let multiTable = [];
    for(i = 1; i <= 10; i++){
        const index = i;
        let multiTaItem = number * index;
        multiTable.push(multiTaItem);
    }
    return multiTable;
}

const multiTabelNumber = 13;
const multiplicationTable = multi(multiTabelNumber);

// console.log(multiplicationTable);


// 2nd ==> find the 2nd largest number

function secolar(numbers){
    let largestNum = numbers[0];
    for(i = 0; i <= numbers.length; i++){
        let number = numbers[i];
        if(number > largestNum){
            largestNum = number;
        }
    }
    let rmlar = numbers.pop(largestNum);
    let seclarge = numbers[0];
    for(i = 0; i <= numbers.length; i++){
        let number = numbers[i];
        if(number > seclarge){
            seclarge = number;
        }
    }
    return seclarge;
}

const arrNums = [324, 666, 232, 423, 543, 987];

const secondlarge = secolar(arrNums);

//  console.log(secondlarge)


// 3rd ==> check a number prime or not prime

function cheakPrime(number){
    let isPrime;
    for(i = 2; i < number; i++){
        isPrime = number % i;
        if(isPrime === 0){
            return false;
        } 
    }
    return true;
}

const numIsPri = 50;

const checkNum = cheakPrime(numIsPri);

// console.log(`is ${numIsPri} prime number:`, checkNum)