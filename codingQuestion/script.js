// 1.Given a string ,reverse each word in the sentence.

// let str="Sourabh hai mera name";

// let saved= str.split(" ").map((word)=>{
//     return word.split("").reverse().join("")
// })
// console.log(saved.join(" "));

// 2.How to check if an object is an array or not?

// function checkArray(elem){
//     return Array.isArray(elem)
// }

// console.log(checkArray([]))
// console.log(checkArray({}))

// 3. How to empty an array javascript? do not reset it to new array and do loop through to pop each value

// var arr=[1,2,3,4,5,6]

// arr.length=0; 

// 4.How would you check if a number is integer?

// var a=12.9;

// if(a%1===0){
//     console.log("integer")
// }else{
//     console.log(" not integer")
// }

// 5. Make this work:

// duplicate([1,2,3,4,5])//[1,2,3,4,5,1,2,3,4,5]

// function duplicate(arr){
//     return arr.concat(arr);
// }

// console.log(duplicate([1,2,3,4,5]))

// Function------------------------

// 6- Write a javaScript function that reverse a number

// function reverse(num){
//     return Number(num.toString().split("").join(""))
// }
// console.log(reverse(12))

// function reversekaro(num){
//     var rev=0;
//   while(num>0){
//     var rem= num%10;
//     rev=rev*10+rem;
//     num=Math.floor(num/10)
//   } 
//   return rev
// }
// console.log(reversekaro(123));

// 7.Write a javascript function that checks whether a passed string is
// palindrome or not

// function stringpalchecker(str){
//       str.split("").reverse().join("");
//       if(reversed===str)
//         return true;
//       else 
//         return false;

// }

// console.log(stringpalchecker("poop"))

// 8. Write a javascript fuction that returns a passed
// string with letters in alphabetical letter.

// function stringAlphaBeticalOrder(str){
//     return str.split("").sort().join("");
// }

// console.log(stringAlphaBeticalOrder("apple"))

// 9.Write a javascript function that accepts a string as Parameter
// and converts the first letter of each word of the string in upper case

// function capitalizekaro(str){
//     var allwords= str.split(" ").map((word)=>{
//         return word.charAt(0).toUpperCase() + word.substring(1);
//     })
//     console.log(allwords.join(" "))
// }

// capitalizekaro("sourabh hai")

// 10. Write a javascript function  to get the number of occurrence of each letter in specified String

// function occ(str){
//     var occurences={};
//     str.split("").forEach((elem)=>{
//         if(occurences.hasOwnProperty(elem)===false){
//             occurences[elem]=1;
//         }else{
//             occurences[elem]++;
//         }
//     })
//     console.log(occurences)
// }
// occ("apple")

// 11. Loop an array and add all members in it

// let arr=[1,2,3,4,5,6]
// let sum=0;

// arr.forEach((elem)=>{
//       sum=sum+elem
// })
// console.log(sum);

// 12. In an array of numbers and String,only add those members which are not String

// var arr=["sour",123,"hiii",3,4]
// var sum=0;

// arr.forEach((elem)=>{
//    if(typeof elem === 'number'){
//      sum=sum+elem;
//    }
// })
// console.log(sum);

// 13. Loop an array of objects and remove all object which do not have gender value male

var arr=[
    {name:"harsh",gender:"male"},
    {name:"harsh",gender:"female"},
    {name:"harsh",gender:"male"},
    {name:"harsh",gender:"female"},
    {name:"harsh",gender:"male"}
    

]

// var newarr=arr.filter((elem)=>{
//       return elem.gender === "male";
// });

// console.log(newarr)

// var count =0;

// arr.forEach((elem)=>{
//   if(elem.gender !=="male")
//   count ++;
// })

// for( var i=1;i<=count;i++){
//     for(var j=0;j< arr.length;j++){
//         if(arr[j].gender !=='male')
//           arr.splice(j,1)
//     }
// }
// console.log(arr)


// Array-------------

// 1. write a javascript to clone an array

// function cloneArray(arr){
//     return [...arr]
// }

// var newarray=cloneArray([1,23,4,5])

// 2.Write a javascript function which accept an argument  and return the type 

// function typeTeller (elem){
//     return typeof elem;

// }
// console.log ( typeTeller([]));

// 3. write a javascript function to get the first element of an Array. passing a parameter "n"
// will return the first 'n' elemnts of the Array.

// function retrieve(arr,n){
//     if(n<=arr.length){
//         for(var i=0;i<n;i++){
//             console.log(arr[i])
//         }
//     }else{
//         console.log(n + " to elements")
//     }
// }
// retrieve([1,2,3,4,5],5)

// 4. write a javascript function to get the last element of an Array. passing a parameter "n"
// will return the last 'n' elemnts of the Array.

// function retrieve(arr,n){
//     if(n<=arr.length){
//         for(var i=0;i<n;i++){
//             console.log(arr[arr.length-1-i])
//         }
//     }else{
//         console.log(n + " to elements")
//     }
// }
// retrieve([1,2,3,4,5],2)
