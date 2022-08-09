// 11th problem

const redColor = "red";
const greenColor = "green";
const yellowColor = "yellow";

let lightColor = yellowColor;
let switchReturn;
switch (lightColor) {
    case "red":
        switchReturn = "Don't cross the road";
        break;
    case "yellow":
        switchReturn = "you should stop";
        break;
    case "green":
        switchReturn = "You can cross the road"
        break;
}

// console.log(switchReturn)

// 12th problem

const myTask = [
    "unlock module daily at 8 pm ",
    "finish the video class and practice ",
    "make notes of all class ",
    "when finish the module then practice the module ",
    "if you face any problem "
];

/* function myTask1(tasks){
    let task = "";
    for(i = 0; i < tasks.length; i++){
        task = tasks[i];
        console.log(task)
         if(task == tasks[4]){
            task = "then join the support session"
         }
    }
   console.log(task)
}

myTask1(myTask) */

// 13th problem 
// using while loop
/* 
function myTask2(tasks){
    let task = "";
    let i = 0;
    while(i < tasks.length){
        task = tasks[i];
        console.log(task);
        if(task == tasks[4]){
            task = "then join the support session";
        }
        i++;
    }
    console.log(task)
}

myTask2(myTask) */

// 14th problem
/* 
function myTask3(tasks){
    let task = "";
    let i = tasks.length - 1;
    while(i >= 0){
        task = tasks[i];
        console.log(task);
        if(task == tasks[4]){
            task = "then join the support session"
            console.log(task)
        }
        i--;
    }
    console.log(task)
}

myTask3(myTask) 
*/

// 15th problem
/* 
function myTask4(tasks){
    let task = "";
    for(i = tasks.length - 1; i >= 0; i--){
        task = tasks[i];
        console.log(task);
        if(task === tasks[4]){
            task = "then join the support session"
            console.log(task);
        }
    }
    console.log(task)
}

myTask4(myTask); */