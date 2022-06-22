const readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;
const info = chalk.blue;
const wrong = chalk.red;
const right = chalk.green;
let isPrime = true;
let userDD = 0;
let userMM = 0;
var userName = readlineSync.question('Enter You Name : \n');
var dob = readlineSync.question("Enter your birth date and month in format DD/MM : ");

var date = dob.replace('/',"");
userDD = parseInt(date.substring(0,2));
userMM = parseInt(date.substring(2,4));

if(userDD >31 || userDD <= 0){
  log(wrong("invalid DD"))
}else if(userMM >12 || userMM <=0){
  log(wrong("invalid MM"))
}else if(userMM == 2 && userDD == 30 || userDD==31){
  log(wrong("invalid date"))
}
else{
  var number = userDD.toString() + userMM.toString();
  number = parseInt(number)
  console.log(number);
  for(let i =2;i<number;i++){
    if(number%i == 0){
      isPrime = false;
      break;
    }
  }
  
if(isPrime){
  log(right(`${userName}, your birth number is prime`))
}else{
  log(info(`${userName}, your birth number is not prime`))
}
}