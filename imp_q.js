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

