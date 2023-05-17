var readlineSync = require("readline-sync");

var day= readlineSync.question("enter a numnber");

if(day==1){
    console.log("day : monday");
}
else if(day==2){
    console.log("day :tuesday");
}
else if(day==3){
    console.log("day :wednesday");
}
else if(day==4){
    console.log("day :thursday");
}
else if(day==5){
    console.log("day :friday");
}
else if(day==6){
    console.log("day :saterday");
}
else if(day==7){
    console.log("day :sunday");
}
else{
  console.log("wrong information");
}