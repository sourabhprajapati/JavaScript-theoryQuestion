//polyfill of map()
// Array.prototype.mymap=function (cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         temp.push(cb(this[i],i,this))
//     }
//     return temp;
// }
// const nums=[1,2,3,4];

// const multiply=nums.mymap((curr)=>{
//       return curr*3
// })
// console.log(multiply)

//polyfill of filter()
// Array.prototype.myfilter=function (cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i],i,this))
//         temp.push(this[i])
//     }
//     return temp;
// }
// const nums=[1,2,3,4];

// const multiply=nums.myfilter((curr)=>{
//       return curr>3
// })
// console.log(multiply)

//polyfill of reducer()


// Array.prototype.myreducer=function (cb,initialvalue){
//     var accumalator=initialvalue;
//     for(let i=0;i<this.length;i++){
//         accumalator=accumalator?cb(accumalator,this[i],i,this):this[i]
//     }
//     return accumalator;
// }
// const nums=[1,2,3,4];

// const multiply=nums.myreducer((acc,curr,i,arr)=>{
//       return acc+curr
// })
// console.log(multiply)

// Question-1  Map vs forEach
// The forEach() method does not returns a  new array based on the given array.while
// The map() method returns an entirely new array.

// map,filter and reduce - o/p Based Question

let students=[
    { name:"piyush",rollNumber:31,marks:80},
    { name:"jenny",rollNumber:15,marks:69},
    {name:"kaushal ",rollNumber:16,marks:35},
    {name:"Dilpreet",rollNumber:7,marks:55}
]
//Question 1- Return only name of students in capital
//  const studentName=students.map((curr)=>{
//        return curr.name.toUpperCase();
//  })
//  console.log(studentName)
 //Question 2- Return only details of those who score more than 60 marks

//  const studentName=students.filter((curr)=>{
//     return curr.marks>60;
// })
// console.log(studentName)
//Question 3-  sum of marks of all students
// const studentName=students.reduce((acc,curr)=>{
//     return acc+curr.marks;
// },0)
// console.log(studentName)
//Question 4  return only names of students who scored more than 60
 

// const names=students.filter((curr)=>{return curr.marks>60}).map((cur)=>{ return cur.name});

// console.log(names);