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

console.log(dogsArray.includes("Trixie"));

console.log(dogsArray.includes("Baxter"));


//opgave 4


console.log(catsArray.includes("Bagheera"));

console.log(catsArray.includes("Salem"));


//opgave 5


const map1 = numbersArray.map((x) => x * 3);

console.log(map1);


//opgave 6 

console.log(dogsArray.join(''));

//opgave 7 

let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]

console.log(fruitsArray.indexOf('Mango'));

console.log(fruitsArray.indexOf('Blåbær'));

//opgave 8 

console.log(dogsArray.indexOf('Polly'))
console.log(dogsArray.slice('3'))
