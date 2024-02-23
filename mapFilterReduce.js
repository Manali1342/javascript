// let arr = [45,23,21];
//map() ---> Creates a new array by performing some operations on each array element..
// let a= arr.map((value,index,array)=>{
//   console.log(value,index,array);
//   return value+1;
// })
// console.log(a);

//ARRAY FILTRE METHOD --> Filters an array with values that passes atest..creates a new array..
// let arr1 = [45,23,21,0,3,5];
// let a2 = arr1.filter((a)=>{
//     return a<10;
// })
// console.log(a2);

//REDUCE METHOD
let arr3 = [1,2,4,5,8,5];
let newArr3 = arr3.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(newArr3);