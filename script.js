let vacationType = prompt("What kind of trip would you like to go on, musical, tropical, or adventurous?");
let groupSize = prompt("How man are in your group?");


let destination;
if(vacationType === "musical"){
    destination = "New Orleans";
}
else if(vacationType === "tropical"){
    destination = "beach vacation in Mexico";
}
else if(vacationType === "adventurous"){
    destination = "whitewater rafting the Grand Canyon";
}

let travelSuggestion;

if(groupSize === 1 || groupSize === 2){
    travelSuggestion = "first class";
}
if(groupSize>=3 && groupSize<=5){
    travelSuggestion = "helicopter";
}
if(groupSize > 6){
    travelSuggestion = "charter flight";
}

let result = "Since you're in a group of "+groupSize+" going on a "+vacationType+" vacation, you should take a "+travelSuggestion+" to a "+destination;

console.log(result);