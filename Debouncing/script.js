//Debouncing in Javascript
 let count=0;
function getData(){
    //Call the API and getdata
    console.log("Fectching of data...",count++)
}

function myDebounce (call,d){
    let timer;
    return function (...args){
        if(timer) clearTimeout(timer);
       setTimeout(()=>{
             call();
       },d)
    }
}

const BetterFunction = myDebounce(getData,1000)