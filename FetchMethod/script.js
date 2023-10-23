// for getting the data
//   fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
//     return res.json();
//   }).then((result)=>{
//        for( x in result){
//           document.write(`${result[x].name} <br>`)
//        }
//   })

// for posting the data
document.getElementById("saveForm").addEventListener("click",(e)=>{
       e.preventDefault();
       let obj={
        title: document.getElementById("titleText").value,
        body: document.getElementById("bodyText").value,
        userId:document.getElementById("userid").value,
      }
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
})
