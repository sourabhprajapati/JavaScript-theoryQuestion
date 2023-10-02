// Objects in JavaScript

// const user={
//     name:"RoadSide Coder",
//     age:24
// }
//to updated object 
// user.name="Sourabh"
//delete element
// delete user.age
// console.log(user)

// const func =( function(a){
//     delete a;
//     return a;
// })(5);
// console.log(func)
// o/p 5 
// explaination-delete is used for deleting the property of object.

// for  dynamic input

// const property="first name";
// const name="sourabh";

// const user={
//     [property]:name
// }
// console.log(user)


//for looping the objects

// const user={
//     name:"sourabh",
//     age:24,
//     isTotallyAwesome:true
// };

// for( key in user){
//     console.log(user[key])
// }

//Question-1 What is the output

// const obj={
//     a:"one",
//     b:"two",
//     a:"three"
// }

// console.log(obj)
// o/p { a: 'three', b: 'two' }
// explanation- it has two key with same name  ,first key value is replace by last key value

//Question 2-create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2


// let nums={
//     a:100,
//     b:200,
//     title:"my nums"
// }

// multiplyByTwo(nums);

// function multiplyByTwo(obj){
//     for (key in obj){
//         if(typeof obj[key]==="number"){
//             obj[key]*=2
//         }
//     }
// }

// console.log(nums)

// const a={};
// const b={key:"b"};
// const c={key:"c"};

// a[b]=123;
// a[c]=456;
// console.log(456);
// o/p 456

//Question 4- what is JSON.strigify and JSON.parse ?

// const user ={
//     name:"sourabh",
//     age:24
// }

//to convert object into string
//  console.log(JSON.stringify(user))

//to convert string into object
// const strobj=JSON.stringify(user)
// console.log(JSON.parse(strobj))

// Use case of JSON.strigify and JSON.parse

// -store into localStorage

//Question 5 -What is the output?

// console.log([..."Lydia"])

// o/p [ 'L', 'y', 'd', 'i', 'a' ]

//Question 6 -What is the output?

// const user={ name:"Lydia",age:21};
// const admin={ admin:true,...user};

// console.log(admin);

// o/p { admin: true, name: 'Lydia', age: 21 }

//Question 7 -What is the output?

// const settings={
//     username:"sourabh",
//     level:19,
//     health:90
// };

// const data=JSON.stringify(settings,["level","health"]);
// console.log(data)
// o/p {"level":19,"health":90}


//Question 8 -What is the output?

// const shape={
//     redius:10,
//     diameter(){
//         return this.radius*2;
//     },
//     perimeter:()=> 2*Math.PI*this.radius
// }

// console.log(shape.diameter());
// console.log(shape.perimeter());

// o/p 20
// NAN

//Question 8 -What is the output?

// let c={ greeting :"Hey!"};
// let d;

// d=c;
// c.greeting="hello";
// console.log(d.greeting);
// o/p- hello
// explaination- when we assign c into d we dont copy the object rather we pass reference to the d
// that mean when ever we change on c than it also reflect on d also.

//Question 9 -What is the output?

// console.log({a:1}=={a:1});
// console.log({a:1}==={a:1});
// o/p false
//     false
// explaination-Both are pointing to defferent memory location

//Question 10 -What is the output?

// const value ={ number :10};

// const mutiply = (x= {...value})=>{
//     console.log((x.number*=2))
// };

// mutiply();//20
// mutiply();//20
// mutiply(value);//20
// mutiply(value);// 40

//Question 11 -What is the output?

// function chnageAgeandReference(person){
//     person.age=25;
//     person = {
//         name:"john",
//         age:50
//     };
//     return person;
// }

// const personObj1={
//     name:"alex",
//     age:30
// }

// const personObj2=chnageAgeandReference(personObj1);
// console.log(personObj1);
// console.log(personObj2);
// o/p-{ name: 'alex', age: 25 }
// { name: 'john', age: 50 }

//Question 11 -What is shallow copy and Deep copy
// Shallow Copy stores the references of objects to the original memory address. Deep copy stores copies of the object's value.


//Question 12 -What is deep copy / clone an object?

// let user={
//     name:"RoadSide Coder",
//     age:24
// }
// // 1st method
// const objClone=Object.assign({},user);
// objClone.name="Souarbh"

// //2nd method
// const objClone=JSON.parse(JSON.stringify(user));
// //3rd method

// const  objClone={...user}
// console.log(user);


