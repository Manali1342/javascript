let marks = [91,92,83,89,95,false,"Not Present"];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log("The number of students are",marks.length);

//Adding a new value to the array... Arrays are mutable,,arrays can be changed...
marks[3]=99;
console.log(marks);


//In javascript arrays are objects, The typeOf operator on array returns objects...
console.log(typeof(marks));

