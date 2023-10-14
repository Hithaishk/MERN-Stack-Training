// prompt('Enter your name');
// console.log('This is console');
// console.log(6+5)

// document.write("<h3>Tavasript </h3>")

// var num1=5;
// var num1=6;     //wwe can redeclare the variable
// num1=8;         //we can reassign the variable
// console.log(num1);

// let num2=9;
// // let num2=10;     //we cannnot redeclare the variable
// num2=11;               //we can reassign the variable
// console.log(num2);

// const num3=5;
// // const num3=6;     //we cannot redeclare the variable
// // num3=8;         //we cannot reassign the variable
// console.log(num1);

// let num1=5;
// let num2="5";
// console.log(num1==num2);        //checks only value
// console.log(num1===num2);       //checks data-type and value



// function mul(num1,num2){
//     return num1*num2
// }


// document.write(mul(3,4))

// function greet(){
//     alert('Hello Everyone')
// }

// let age=prompt("Enter the age" ,"");
// if(age>=18){
//     document.write("Elligible for vote");
// }
// else{
//     document.write("Elligible for vote");
// }

// for(let num=10;num>=1;num--){
//     document.write(num )
//     document.write(",")
// }

// let num1=1;
// while(num1<10){
//     document.write(num1 , " ")
//     num1++;
// }

//Dom- Document Object Model
//Dom Manipulation Methods
//document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll

let el=document.getElementById("head").innerHTML;
console.log(el);

let ele =document.querySelector("#head").innerHTML;
console.log(ele);