//Promises in javascript
//callback

// console.log("start");

// function importantAction(username,cb){
//     setTimeout(()=>{
//         cb(`subscribe to ${username}`)
//     },1000)
// }
// const message=importantAction("RoadSide Coder", function(message){
//     console.log(message);
// });
// console.log("stop");
// o/p-start
// stop
// subscribe to RoadSide Coder

// console.log("start");

// function importantAction(username,cb){
//     setTimeout(()=>{
//         cb(`subscribe to ${username}`)
//     },1000)
// }
// const message=importantAction("RoadSide Coder", function(message){
//     console.log(message);
// });
// console.log("stop");

//Promises
// console.log("Start");

// const sub=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const result=true;
//         if(result)
//           resolve("Subscribe to RoadSide coder")
//         else
//           reject(new Error ("why are not you subscribed to Roadside coder"))
//     },2000)
// })
// sub.then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// console.log("stop");
// o/p-Start
// stop
// Subscribe to RoadSide coder

//Promise combinators are:

// 1] Promise.all()

// 2] Promise.race()

// 3] Promise.allSettled()

// 4] Promise.any()

// Promise.all() method:

// The Promise.all() method executes all the promises that have been passed to it and lets you know if all the promises are fulfilled or if any one of them has been rejected. If all of them are fulfilled, it returns an array with the fulfillment value of all the promises that were input to it. If any of the promises fail
// , it breaks the process and returns failed status with rejection value of the failed promise.

// Hence, it cannot handle partial failures. If anyone of the promise fails Promise.all() returns rejected state.

// console.log ("start");

// function importantAction(username){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//            resolve(`subscribe to ${username}`)
//          },1000)
//     })
// }

// function likeThevideo(video){
//     return new Promise ((resolve,reject)=>{
//          setTimeout(()=>{
//             resolve(`Like the ${video} video`)
//          },1000)
//     })
// }

// function shareTheVideo(video){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve(`Share the ${video} video`)
//         },1000)
//    })
// }

// Promise.all([
//     importantAction("Roadside Coder"),
//     likeThevideo("Javascript Interview Question"),
//     shareTheVideo("Javascript Interview Question")
// ])
// .then ((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err)
// })

// console.log("Stop")

// o/p-start
// Stop
// [
//   'subscribe to Roadside Coder',
//   'Like the Javascript Interview Question video',
//   'Share the Javascript Interview Question video'
// ]

// Promise.race() method:

// As of his name this promise combinator can be useful when you want to do something as soon as any of the promises either gets resolved or rejected.
// The resolved promise will return the value or the reason of the promise that got resolved or rejected first.

// console.log ("start");

// function importantAction(username){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//            resolve(`subscribe to ${username}`)
//          },1000)
//     })
// }

// function likeThevideo(video){
//     return new Promise ((resolve,reject)=>{
//          setTimeout(()=>{
//             resolve(`Like the ${video} video`)
//          },1000)
//     })
// }

// function shareTheVideo(video){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve(`Share the ${video} video`)
//         },500)
//    })
// }

// Promise.race([
//     importantAction("Roadside Coder"),
//     likeThevideo("Javascript Interview Question"),
//     shareTheVideo("Javascript Interview Question")
// ])
// .then ((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err)
// })

// console.log("Stop")

// o/p-start
// Stop
// Share the Javascript Interview Question video

// explaintion- it will return first those promises which resolve first

// Promise.allSettled() method:

// What if you want a JavaScript promise combinator method that does not stop if any of the promises fails? A method that ignores failures and gives you a result of the succeeded promises? That is exactly where the Promise.allSettled method comes in.

// Once all promises are settled, this method returns an array of objects. Each object has a status key with the value of the promise (fulfilled or rejected), and the other one will be the value if the promise is fulfilled or the reason if it got rejected.

// Promise.any() method:

// Promise.any gives you a signal as soon as one of the promises fulfils. This is similar to Promise.race, except any doesn’t reject early when one of the promises rejects. It will only get rejected if all the input promises are rejected.
//  it return first promises which fulfilled and ignore the all rejected onemptied.

//Async/Await

// console.log ("start");

// function importantAction(username){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//            resolve(`subscribe to ${username}`)
//          },1000)
//     })
// }

// function likeThevideo(video){
//     return new Promise ((resolve,reject)=>{
//          setTimeout(()=>{
//             resolve(`Like the ${video} video`)
//          },1000)
//     })
// }

// function shareTheVideo(video){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve(`Share the ${video} video`)
//         },500)
//    })
// }

// const result =async()=>{
//     const message1=await importantAction("Roadside coder");
//     const message2= await likeThevideo("Javascript Interview Question");
//     const message3=await shareTheVideo("Javascript Interview Question")

//     console.log({message1,message2,message3})
// }
// result();
// o/p-start
// {
//   message1: 'subscribe to Roadside coder',
//   message2: 'Like the Javascript Interview Question video',
//   message3: 'Share the Javascript Interview Question video'
// }


//Question 1- What is the output?
// console.log("start");
// const promise1=new Promise((resolve,reject)=>{
//     console.log(1);
//     resolve(2);
// })

// promise1.then((res)=>{
//     console.log(res);
// });

// console.log("end");

// o/p-start
// 1
// end
// 2

//Question 2- What is the output?


// console.log("start");
// const promise1=new Promise((resolve,reject)=>{
//     console.log(1);
//     resolve(2);
//     console.log(3);
// })

// promise1.then((res)=>{
//     console.log(res);
// });

// console.log("end");

// o/p-start
// 1
// 3
// end
// 2


//Question 3- What is the output?

// console.log("start");


// const fn =()=>
//     new Promise((resolve)=>{
//        console.log(1);
//        resolve("success")
//     });


// console.log("middle");

// fn().then((res)=>{
//     console.log(res);
// })

// console.log("end");

// o/p-start
// middle
// 1
// end
// success

//Question 4- What is the output?

// function job(){
//     return new Promise((resolve,reject)=>{
//           reject();
//     })
// }

// let promise=job();

// promise.then(function(){
//     console.log("Sucess 1")
// })
// .then(function(){
//     console.log("Sucess 2")
// })
// .then(function(){
//     console.log("Sucess 3")
// })
// .catch(function(){
//     console.log("Error 1")
// })
// .then (function (){
//     console.log("Sucess 4")
// })
// o/p-Error 1
// Sucess 4

//Question 6- What is the output?

// function job(state){
//     return new Promise (function(resolve,reject){
//        if(state){
//         resolve("sucess")
//        } 
//        else{
//         reject("error")
//        }
//     });
// }

// let promise=job(true);

// promise.then((data)=>{
//    console.log(data);
//    return job(false)
// }).catch((error)=>{
//     console.log(error);
//     return "Error caught"
// })
// .then(function (data){
//     console.log(data);
//     return job(true)
// })
// .catch(()=>{
//     console.log(error)
// })
// o/p-sucess
// error
// Error caught

//Question-7 Promise Chaning

// const firstPromise= new Promise((resolve,reject)=>{
//      resolve("First !")
// })

// const secondPromise =new Promise ((resolve,reject)=>{
//     resolve(firstPromise)
// })

// secondPromise.then((res)=>{
//     return res;
// }).then ((res)=>{
//      console.log(res)
// })
// o/p-First !

//Question-8 Promise Chaning

// async function loadjson(url){
//   let response= await fetch(url);

//   if(response.status==200){
//     let json=await response.json();
//     return json;
//   }
//   throw new Error (response.status)
// }

// loadjson(url).catch(()=>{
//     console.log(err)
// })

//Question-8 Solve Promise Recursively
// function importantAction(username){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//            resolve(`subscribe to ${username}`)
//          },1000)
//     })
// }

// function likeThevideo(video){
//     return new Promise ((resolve,reject)=>{
//          setTimeout(()=>{
//             resolve(`Like the ${video} video`)
//          },1000)
//     })
// }

// function shareTheVideo(video){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve(`Share the ${video} video`)
//         },500)
//    })
// }
// function proRecurse(funcPromises){
//    if(funcPromises.length ===0) return;

//    const currPromise=funcPromises.shift();
//    currPromise.then((res)=>console.log(res))
//    .catch((error)=>console.log(err))
//    proRecurse(funcPromises);
// }

// proRecurse([
//     importantAction("Roadside Coder"),
//     likeThevideo("JavaScript Interview Question"),
//     shareTheVideo("JavaScript Interview Question")

// ])