// "this " keyword

// let user={
//     name:"sourabh",
//     age:24,
//     childObj:{
//         newName:"Roadside coder",
//         getDetails(){
//             console.log(this.newName,"and",this.name)
//         },
//     },
// }

// user.childObj.getDetails();
// o/p-Roadside coder and undefined

// this keyword in class


// class user{
//     constructor(n){
//        this.name=n;
//     }
//     getName(){
//         console.log(this.name)
//     }
// }

// const User=new user("sourabh");
// console.log(User);

//Question 1 -what is the output?

// const user={
//     firstName:"piyush!",
//     getName(){
//         const firstName="piyush agrawal"
//         return this.firstName;
//     },
// };

// console.log(user.getName());
// o/p piyush!

//Question 2 -what is the result of accessing its ref?why?

// function makeUser(){
//     return {
//         name:"john",
//         ref:this,
//     }
// }

// let user=makeUser();
// console.log(user.ref.name);
// o/p-undefined

// function makeUser(){
//     return {
//         name:"john",
//         ref (){
//             return this
//         }
//     }
// }

// let user=makeUser();
// console.log(user.ref().name);
// o/p john

//Question 3 -what is the Output?
// const user={
//     name:"piyush",
//     logMessage(){
//         console.log(this.name)
//     }
// }
// setTimeout(user.logMessage,100)
// o/p-undefined 
// explanation-user.logMessage pass as a callback function.that is pointing to the window

// How to solve above problem

// const user={
//     name:"piyush",
//     logMessage(){
//         console.log(this.name)
//     }
// }
// setTimeout(function(){user.logMessage()},100)
//  o/p-piyush

//Question 4 -what is the Output?

// const user={
//     name:"sourabh",
//     greet(){
//         return `Hello,${this.who}!`;
//     },
//     farewell:()=>{
//       return `Goodbye,${this.name}!`
//     }
// };
// console.log(user.greet());
// console.log(user.farewell());
// o/p-Goodbye,undefined!

//Question 5- Create an object calculator

// let calculator={
//     read(){
//         this.a=+prompt("a =",0);
//         this.b=+prompt("b= ",0);
//     },
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a*this.b;
//     }
// }

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//Question 6- what will be the Output?

var length=4;

function callback(){
    console.loh(this.length);
}

const obj={
    length:5,
    method(fn){
        fn();
    }
}

obj.method(callback);
o/p-4


//Question 7 =Implement calc

// var calc ={
//     total:0,
//     add(a){
//         this.total+=a;
//         return this;
//     },
//     subtract(a){
//        this.total-=a;
//        return this;
//     },
//     multiply(a){
//         this.total*=a;
//         return this;
//     },

// };

// const result=calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total)