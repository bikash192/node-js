let fruits=["apple","banana","orange","grape"];
console.log(fruits[0]);
console.log(fruits[2]);
// Adding elemnts to the enddddd
fruits.push("kiwi");
console.log(fruits);
// Adding elemnts to the beggining
fruits.unshift("mango");
console.log(fruits);
// Removing the last element
let removedlast=fruits.pop();
// Removing the first element
let removedFirst=fruits.shift();
// Finding index of an element
let indexOfOrange=fruits.indexOf("orange");
console.log(indexOfOrange);
// Iterating using a for loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
// Splicing an array(modifying original aaray)
let removed=fruits.splice(1,2,"pear","melon");
// Concatenating arays
let moreFruits=["grapefruits","pineapple"];

let allFruits=fruits.concat(moreFruits);
