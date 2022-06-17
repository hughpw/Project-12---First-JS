
let myName = "Hugh";
let myAge = 22;

console.log("Hello my name is " + myName + " and I am " + myAge + " years old.");

myAge++;
console.log("On November 24th I will be " + myAge + " years old.");

console.log(typeof myName);
console.log(typeof myAge);
console.log("My name has " + myName.length + " letters.");
console.log("The third letter of my name is " + myName[2] + ".");
console.log(myName.includes("h" || "o"));
console.log(myName.includes("u" && "l"));

let mySurname = "Kwabiah";
console.log(`My surname is ${mySurname}.`);
console.log(`My youngest brother is ${--myAge - 12} years old.`)