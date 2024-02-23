//What will be the following strings print in javascript
// console.log("Har\'".length);

//Explore the includes,startWith and endWith function of a string
// const sentence = "The quick brown fox jumps over the lazy dog";
// const word = 'fox';
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' :'is not'} in the sentences`);

//Write a program o convert a given string into a lowerCase
// let fname = "SHUBHAM";
// console.log(fname.toLowerCase());

//Extract the amount out of this string
let str2 = "Please give Rs 1000";
let amount = Number.parseInt(str2.slice(15,20));
console.log(amount);
console.log(typeof amount);

// Try to change 4th character of a given string..will you able to do it...
// We will not be able to do it