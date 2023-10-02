//let vs const vs var
//scope-scope is certain region of a program where define variable exist and can be recognize beyound that it can not be recognize

// function test(){
//     var a=10;
//     let b=20;
//     if (true){
//         let a=30;
//         var b=50;
//         console.log(a);
//         console.log(b);
//     }
// }
// test()
// output
// dentifier 'b' has already been declared
// explination- when we try to shadow var with let than it is ok but we can not shodow let with var ani it called illegal shadowing 