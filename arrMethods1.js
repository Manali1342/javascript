// DELETE OPERATOR
// let num = [1,2,3,4,5,6,7];
// let num2 = [11,12,13,14,15,16,17];
// let num_even_more=[21,22,23,24,25,26,27];

// delete num[0];
// console.log(num);
// console.log(num.length);//7

//Array Concatination
// let newArray = num.concat(num2,num_even_more);//Returns a new array and does not change existing array..
// console.log(newArray);
// console.log(num,num2);

//Sort Method
// let num = [11,9,3,4,50,16,1,15];
// num.sort();
// console.log(num);//  Number sorts alphabatically...

// let compare =(a,b)=>{
//     return a-b;
// }
// let num3 = [11,9,3,4,50,16,1,15];
// num3.sort(compare);
// console.log(num3);//  Number sorts alphabatically...

//Reverse Method
// let arr = [3,7,9,10,43,56,22,88];
// console.log(arr.reverse(arr));

//Splice Method
// let num3 = [11,9,5,3,8,2];
// num3.splice(2,3,1021,1022,1023);  //index =2, remove element=3, add=remaining...
// console.log(num3);  //Return deleted elements and update the original array...

//Slice Method
let num = [1,2,3,4,5,6,7];
let newArr = num.slice(3,5);
console.log(num); //does not modifies an original array
console.log(newArr); // It returns deleted elements..




