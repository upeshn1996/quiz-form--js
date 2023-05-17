var readlineSync = require("readline-sync");

let a = readlineSync.question("enter a multuiplication table");
a=parseInt(a)
for( let i=2;i<=10;i++){
    console.log(i,"*",a,"=",i*a)
}