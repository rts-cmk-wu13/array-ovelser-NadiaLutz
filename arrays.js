document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

}) // ends DOMContentLoaded

//opgave 1 

let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

numbersArray.forEach(function(number) {
    if (number > 20) {
        console.log(number);
    } else {
        console.log(number + " is less than 20");
    }
});

//opgave 2 

let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];

const count = catsArray.push('Sniffles');
console.log(count);

console.log(catsArray);

//opgave 3 

let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];

console.log(dogsArray.includes("Baxter"));
// Expected output: true

