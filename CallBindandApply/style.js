//call,Bind and Apply in JavaScript .
//Question 1- What is call?

// var obj={ name:"piyush"};

// function sayHello(age){
//       return "Hello" + this.name + "is" + age;
// }


// console.log(sayHello.call(obj,24))

// o/p-Hellopiyushis24

//Question 2- What is Apply?
// var obj={ name:"piyush"};

// function sayHello(age,profession){
//       return "Hello" + this.name + "is" + age + "and is an"+profession;
// }


// console.log(sayHello.apply(obj,[24,"Software Engineer"]))

//Question 3- What is Bind?

// var obj ={ name:"piyush"};

// function sayHello(age,profession){
//     return "Hello"+ this.name + "is" + age + "ans is an " + profession;

// }

// const bindFunc = sayHello.bind(obj);

// console.log(bindFunc(24,"Software Engineer"));
// console.log(bindFunc(69,"youtube"))


//Question 4- Output Based Question

// const person = {name : "Piyush"};

// function sayHi(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person,24));
// console.log(sayHi.bind(person,24));

// o/p-Piyush is 24
// [Function: bound sayHi]

//Question 5- Output Based Question

// const age=10;
// var person={
//     name:"sourabh",
//     age:20,
//     getAge:function(){
//         return this.age;
//     },
// };


// var person2={age:24};

// console.log(person.getAge.call(person2));
// o/p-24

//Question 6- Output Based Question
// var status = '😎';

// setTimeout(() => {
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus()); 
//   console.log(data.getStatus.call(this));
// }, 0);
// o/p-🥑

// 😎
//4. write printAnimals() in such a way that it prints all animals in object below.
// const animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Queen' }
//   ];
  
//   function printAnimals(i) {
//       this.print = function() {
//         console.log('#' + i + ' ' + this.species
//                     + ': ' + this.name);
//       }
//       this.print();
//     }

//     Let's try to call the function using call method

//     printAnimals.call(animals); // #undefined undefined: undefined
//     It gives output of undefined. Why? Well call demands object to be the parameter not array of objects like animals.
    
//     Approach will be run a for loop iterate through array of objects and call it on every object.
    
    
//     for (let i = 0; i < animals.length; i++) {
//       printAnimals.call(animals[i], i);  
      
//     } 
//     o/p-  #0 Lion: King #1 Whale: Queen


//5. How to append an array to another array.

// const array = ['a', 'b'];
// const elements = [0, 1, 2];
// array.push.apply(array, elements); //[a,b,0,1,2]


//6. Find min/max in an array and use apply to enhance a built-in function.

// const numbers = [5, 6, 2, 3, 7];

// // using Math.min/Math.max apply

// let max = Math.max.apply(null, numbers); // equal to Math.max

// let min = Math.min.apply(null, numbers); // equal to Math.min 

// // vs. simple loop based algorithm

// max = -Infinity, min = +Infinity;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

//7. Create a bound function

// function f() {
//     alert( this ); // 
//   }
  
//   let user = {
//     g: f.bind(null)
//   };
  
//   user.g(); //window object
  

//11. -Bind Chaining

// function f(){
//     console.log(this.name);
// }

// f=f.bind({name:"john"}).bind({name:"Ann"});

// f();
// o/p-john
// explanation- there no any bindchaining exist.


 //12. Fix the line checkPassword to make code work properly

// function checkPassword(sucess,failed){
//     let password=promot("password?","");
//     if(password=="RoadSide coder")
//     sucess();
//     else
//     failed();

// }

// let user={
//     name:"piyush Agrawal",

//     loginSucessful(){
//         console.log(`${this.name} logged in`);
//     },
//     loginFailes(){
//         console.log(`${this.name} failed to log in`);
//     }
// }

// checkPassword(user.loginSucessful.bind(user),user.loginFailes.bind(user))

//13. - Partial application for login function

// function checkPassword(ok,fail){
//     let password= prompt("password","");
//     if(password == "roadside coder") ok();
//     else
//     fail();
// }

// let user={
//     name:"sourabh prajapati",

//     login(result){
//         console.log(this.name + (result ? "login successful" : "login faild"))
//     }
// }

// checkPassword(user.login.bind(user,true),user.login.bind(user,true))

//14.- Explicit Binding with Arrow Function

// const age =10;

// var person ={
//     name:"sourabh",
//     age:20,
//     getAgeArrow:()=> console.log(this.age),
//     getAge: function (){
//         console.log(this.age);
//     }
// }

// var person2={age:24};

// person.getAgeArrow.call(person2);//undefine
// person.getAge.call(person2);//24


//15- polyfill for call method

// let car1={
//     color:"red",
//     company:"Ferrari"
// };

// function purchaseCar(currency,price){
//     console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`)
// }

// Function.prototype.myCall = function (context={},...args){
//     if(typeof this!=="function"){
//         throw new Error ( this + "It is not callable")
//     }

//     context.fn=this;
//     context.fn(...args);
// }

// purchaseCar.myCall(car1,"$",5000000)

//16- polyfill for apply method

// let car1={
//     color:"red",
//     company:"Ferrari"
// };

// function purchaseCar(currency,price){
//     console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`)
// }

// Function.prototype.myApply = function (context={},args=[]){
//     if(typeof this!=="function"){
//         throw new Error ( this + "It is not callable")
//     }
//     if (!Array.isArray(args)){
//         throw new Error(this + "CreateListFromArray called a non-object")
//     }

//     context.fn=this;
//     context.fn(...args);

// }

// purchaseCar.myApply(car1,["$",5000000])

//16- polyfill for bind method

let car1={
    color:"red",
    company:"Ferrari"
};

function purchaseCar(currency,price){
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`)
}

Function.prototype.myBind = function (context={},...args){
    if(typeof this!=="function"){
        throw new Error ( this + "It is not callable")
    }
   
    context.fn=this;
    return function (...newargs){
        return context.fn(...args,...newargs);
    }
}

let fun=purchaseCar.myBind(car1)
console.lof(fun("$",50000))