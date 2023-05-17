var readlineSync = require("readline-sync");

let a = readlineSync.question("enter a number");
if(a%4==0){
console.log("you enter a even number");
}
else{
    console.log("you enetr a odd number")
}