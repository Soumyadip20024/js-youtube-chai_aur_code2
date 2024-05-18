//node .devcontainer/01_basics/01_conversion_operation
let score = "33abc"
console.log(typeof score);//string
console.log(typeof(score));//string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//NaN


let score1 = null;
console.log(typeof score1);//object
console.log(typeof(score1));//object

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);//number
console.log(valueInNumber1);//0


let score2 = undefined;
console.log(typeof score2);//undefined
console.log(typeof(score2));//undefined

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);//number
console.log(valueInNumber2);//NaN


let score3 = true
console.log(typeof score3);//boolean
console.log(typeof(score3));//boolean

let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);//number
console.log(valueInNumber3);//1

let score4 = "abc"
console.log(typeof score4);//string
console.log(typeof(score4));//string

let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4);//number
console.log(valueInNumber4);//NaN

//"33" =>33
//"33abc" =>NaN
//true =>1;  false=>0; or vice-versa


let isLoggedIn = 1;
let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);//true

//1 =>true; 0=>false;
//"" =>false
//"soumya" =>true