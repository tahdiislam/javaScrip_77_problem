// 21 problem

for(i = 581; i <= 623; i += 2){
    // console.log(i);
}

// 22 problem

const learningThings = ["html", "css", "bootstrap", "TailwindCss", "javaScript"];
for(i = 0; i < learningThings.length; i++){
    let learningThing = learningThings[i];
    // console.log(learningThing)
}

// 23 problem

const usedPhones = ["nokia", "walton", "realme", "samsung", "iphone"];

for(i = 0; i < usedPhones.length; i++){
    let usedPhone = usedPhones[i];
    // console.log(usedPhone)
}

// 24 problem

for(i = 30; i <= 86; i++){
    // console.log(i)
    if(i > 43){
        break;
    }
}

// 25 problem

const bookPrices = [123, 165, 144, 155, 177, 125, 250, 130, 300, 450, 320, 120, 200, 543, 140];

for(i = 0; i < bookPrices.length; i++){
    let bookPrice = bookPrices[i];
    console.log(bookPrice);
    if(bookPrice >= 200){
        continue;
    }
}