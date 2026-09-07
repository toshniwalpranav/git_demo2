//console.log("hiiii");

//----------------------------------

/*
let name ="pranav";

console.log(name);
console.log("name");
*/

//--------------------------------------
/*
let text = "HELLO WORLD";
console.log(text.charAt(0));
*/

//------------------------------------------

/*
let score = 10;
score =15;
console.log(score);

const tax=2;
tax=3;
console.log(tax);

*/
//--------------------------------------------

/*
let a=10;
let a=10;                  //wrong
console.log(a);
*/

//---------------------------------------------
/*
{
    let a=5;
    console.log(a);
}

{
let a=10;
console.log(a);
}
*/
//-------------------------------------------

/*
let isWeekend = true;

if (isWeekend) {
  console.log("Time to relax!"); // This runs because isWeekend is true
} else {
  console.log("Time to work.");
}

*/

//------------------------------------------------------------------------------------




                    //DATA TYPE
/*                    
 let a=10;
 console.log(typeof(a)); 
 let b="a";
 console.log(typeof(b));
 */ 
//--------------------------------------------

//--------------------------------------------

/*
let a=10;
let b=20;
let c = a+b;                       //+,-,*,/
console.log(c);                    //remainder and square % , **
console.log(a+b);
console.log("a+b= ", a+b);
*/

//-------------------------------------------------

/*

//a++         a--           a=a+1,    a=a-1 , a+ =2;

let a=10;
console.log(a);
a++;
console.log(a);
a--
console.log(a);
--a
console.log(a);


let b=10;
console.log(++b);
console.log(b++);
*/

//-------------------------------------------------

//==    ,        ===     , !=          !==   >   >=     <   <=

/*
let a= 5;
let b=4;
console.log(a==b);
console.log(a===b);  //also check data type
 */


//-----------------------------------------------------------
/*
//&& ,               || or                   ,    !logical not

let a =2;
let b=3;

let cond1 = a<3;
let cond2 = a===2;
console.log(cond1 && cond2);
*/
//-------------------------------------------------------------

/*
let age=20;
if(age>10)
{
    console.log("its is greater than");
}else
{
    console.log("less than");
}
*/

//-------------------------------------------------

/*
let age=20;
let result=age>=18 ?"adult":"not adult";
console.log(result);
*/

//----------------------------------------------------

/*
let a=10;
while(a>20)
{
    console.log(a);
}

let b=5;
do{
    console.log(b);
}while(b>20);

*/

//------------------------------------------------------------------------------

/*
const favoriteFruit = "apple";

switch (favoriteFruit) {
  case "apple":
    console.log("Apples are crunchy and great for pies!");
    break;
  case "banana":
    console.log("Bananas are packed with potassium!");
    break;
  case "orange":
    console.log("Oranges are full of Vitamin C!");
    break;
  default:
    console.log("That sounds like a delicious fruit too!");
}
*/

//--------------------------------------------------------

/*
//getting user input
let num = prompt("enter the number: ");
if(num % 5 ===0)
{
    console.log("number is multiple 5");
}else
{
    console.log("it not multiple of 5 ");
}

*/

//-------------------------------------------------------------------

/*
for(let a=10; a<=15; a++)
{
    console.log(a);
}
*/


//-----------------------------------------------------------------------


//print every digit
/*
let str = "pranav";
let size=0;
for(let i of str)
{
    console.log((i));
    size++
}
    console.log(size);

*/
//-----------------------------------------------------------------



//----------------------------------------------------------------------------------
/*
//In object only print key
let student = {
    name : "pranav",
    age : 10,
};
for(let key in student)
{
    console.log(key);
}
for(let key in student)
{
    console.log("key=",key,"value=",student[key]);
}
*/

//-------------------------------------------------------------------

/*
//loop for even number
for(let num =0; num<=10; num++)
{
    if(num%2===0)
    {
        console.log(num);
    }
}
*/

//----------------------------------------------------------------
//game
/*
let a =5;
let num = prompt("guess number its between 2 to 6 :");
while(a!=num)
{
    num=prompt("try again between 2 to 6 :");
}
console.log("you got it");
*/

//--------------------------------------------------------------

/*
//print only index value
let name ="pranav";
console.log(name[0]);
*/

//-----------------------------------------------------------------

/*
let name="pranav";
console.log(name.length);
*/

//-------------------------------------------------------------------

//String method js / function

/*
let a= "hii"; //not change original string
let b = a.toUpperCase();
console.log(a);
console.log(b);
let c= b.toLowerCase();
console.log(c);
*/

//------------------------------------------------------------------
//remove whitespace end
/*
let a= "    pranav    hiii     "
console.log(a.trim());
*/

//-----------------------------------------------------------------
/*
let a= "pranav";
console.log(a.slice(0,3));
console.log(a.slice(1));//only one remove

let b ="gaurav";
let c = a.concat(b); //let c = a + b
console.log(c);
*/
//----------------------------------------------------------------------

/*
let a = "yello";
console.log(a.replace("y", "p"));
console.log(a.replace("o", "k"))
*/

//----------------------------------------------------------------------
/*
let a="pranav";
console.log(a.charAt(0));
*/
//-----------------------------------------------------------------------

/*
//Arrays in js
let marks= [4,8,9,10];
console.log(marks);
console.log(marks.length);

let A=["b", "c", "d"];
console.log(A);

for(let i=0; i<A.length; i++)
{
    i++;
    console.log(i);
}


let sum = 0;
for(let val of marks)
{
    console.log(val);
    sum = sum + val;
}
console.log(sum);
let avg= sum/marks.length;
console.log(avg);

*/
/*
//Array method
let fooditem = ["potato", "apple", "tomato"];
fooditem.push("mango");
console.log(fooditem);
fooditem.pop();
console.log(fooditem);
fooditem.unshift("banana"); //at start
console.log(fooditem);
fooditem.shift();    //delete from first
console.log(fooditem);


//convert to string
let a= [10,50,30];
console.log(a.toString());



*/

//-----------------------------------------------------------------
/*
//Arrays Filter
let Arr=[2,5,7,9];
let NewArr=Arr.filter((number) => number>5); //check interm of true and false
console.log(NewArr);


let NewArr2 = Arr.map((num) => {
    return num*2;
})
console.log(NewArr2);
*/
//--------------------------------------------------------------------------------


//function
/*
function A()
{
    console.log("hii");
    console.log("bye");
}
A();

function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
console.log(result);


function sum(x,y)
{
    console.log(x+y);
}
sum(10,5);


function sum(k,j)
{
    s= k+j;
    return s;
}
let V = sum(4,9);
console.log(V);


function multiply(a, b) {
  return "Done";
  // Next line will never run
  return a * b;
}

let result = multiply(4, 3);
console.log(result);


function checkAge(age) {
  if (age < 18) {
    return "Too young";
  }
  return "Access granted";
}

let a =checkAge(20);
console.log(a);
*/

//-------------------------------------------------------------------------------------
/*
function countvol(str)
{
    let count =0;
    for(let char of str)
    {
        if(char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u")
        {
            count ++;
        }
    }
    console.log(count);
}
countvol("hello");
*/


//----------------------------------------------------------------------------------------
/*
let btn1 = document.querySelector("#btn1");
let a = 25; // Move this outside the function

btn1.onclick = () => {
    console.log("btn1 was clicked");
    a++; 
    console.log(a);
}
//-------------------------------------------------------------------------------------

let btn2 = addEventListener("click", () =>{
    console.log("button was click");
    console.log(event.type);
})


 btn2 = addEventListener("click", () =>{
    console.log("button was click -handler");

})

*/
//-------------------------------------------------------------------------------------
/*
//set timeout
function hello(){
    console.log("hello");
}
setTimeout(hello,4000);
*/
//--------------------------------------------------------------------------------

/*
let hiii =() =>{
    console.log("hello");
    }
    setTimeout(hiii,4000);

*/


//------------------------------------------------------------------------------------

/*
console.log("A");
console.log("B");

function hello(){
    console.log("hello");
}
setTimeout(hello,4000);

console.log("C");
console.log("D");
*/

//---------------------------------------------------------------------------------

/*
function sum (a,b)
{
    console.log(a+b);
}

function calculator(a,b,sumcallback){
    sumcallback(a,b);
}
calculator(1,2,sum);

*/

//----------------------------------------------------------------------------------
//callback
/*
function getData(dataId, getNextData)
{
    setTimeout( () => {
        console.log("data",dataId)
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}

    getData(1, () => {
        getData(2);
    });
*/

//----------------------------------------------------------------------

/*
//callback - nested callback- callback hell 
function getData(dataId, getNextData)
{
    setTimeout( () => {
        console.log("data",dataId)
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}

    getData(1, () => {
        getData(2, () => {
            getData(3);
        });
        
    });
*/
//==========================================================================

//object = collection of diffrenet variable
/*
const student = {
    name : "pranav",
    age :25,
};
console.log(student);
console.log(typeof(student));
console.log(student.age);
console.log(student.name);
console.log(student["name"]);
console.log(student["age"]);
*/

//-------------------------------------------------------------------------
/*
let pranav ={
    tax() {
        console.log("tax rate is 10%");
    },
};

pranav.tax();
*/
//-----------------------------------------------------------------------------------

/*let employee={
tax(){
    console.log("tax rate 10%");
},
};

let pranav1 ={
        salary:50000,
      };

let pranav2= {
        salary:50000,

};

let pranav3 ={
        salary:50000,

};
pranav1.__proto__=employee;
pranav2.__proto__=employee;
pranav3.__proto__=employee;

pranav2.tax();

*/

//--------------------------------------------------------------------------------

/*
let employee={
tax(){
    console.log("tax rate 10%");
},
};

let pranav1 ={
        salary:50000,
      };

let pranav2= {
        salary:100000,
    tax(){
    console.log("tax rate is 20%");
    }
};

let pranav3 ={
        salary:50000,

};
pranav1.__proto__=employee;
pranav2.__proto__=employee;
pranav3.__proto__=employee;

pranav2.tax();


*/

//---------------------------------------------------------------
//created car
/*
class ToyotaCar{
 start(){
    console.log("start");
 }

 stop(){
    console.log("stop");
 }
}

//console.log(ToyotaCar);
let fortuner = new ToyotaCar();  //created object of that class
console.log(fortuner.start);   
*/
//----------------------------------------------------------------
/*
//This keywrod
class ToyotaCar{
 start(){
    console.log("start");
 }

 stop(){
    console.log("stop");
 }

  setBrand(brand){
    this.brandName=brand;   //object property
  }
}
let fortuner = new ToyotaCar();  //created object of that class
fortuner.setBrand("Hycross");
console.log(fortuner.brandName);   

*/
//-----------------------------------------------------------------------------

//constructor
/*
class ToyotaCar{
constructor(){                                        //sabse pahile constructor evoke hoga
    console.log("creating object")
}
    start(){
    console.log("start");
 }

 stop(){
    console.log("stop");
 }

  setBrand(brand){
    this.brandName=brand;   //object property
  }
}
let fortuner = new ToyotaCar();  //constructor  
*/
//------------------------------------------------------------------------------------------
/*
class ToyotaCar{
constructor(brand){                                        //passing the parameter
    console.log("creating object");
    this.brand=brand;
}
    start(){
    console.log("start");
 }

 stop(){
    console.log("stop");
 }

}
let fortuner = new ToyotaCar("Innova");  //constructor
console.log(fortuner.brand);  

*/

//-------------------------------------------------------------------------------------------
/*
//multiple object pass
class ToyotaCar{
constructor(brand,mileage){                                        //passing the parameter
    console.log("creating object");
    this.brand=brand;
    this.mileage=mileage;
}
    start(){
    console.log("start");
 }

 stop(){
    console.log("stop");
 }

}
let fortuner = new ToyotaCar("Innova",10);  //constructor
console.log(fortuner.brand);
console.log(fortuner.mileage);  
*/
//---------------------------------------------------------------------------------------------
/*
//Inheritance
class person{
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class Engineer extends person{
    work(){
        console.log("build everything");
    }
}

let pranav = new Engineer(); //create pranav object
console.log(pranav.eat());
*/

//------------------------------------------------------------------------------------------
/*
//overriding

class person{
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }

    work()
    {
        console.log("don nothing");
    }
}

class Engineer extends person{
    work(){
        console.log("build everything");
    }
}

let pranav = new Engineer(); //create pranav object
console.log(pranav.work());

*/
//----------------------------------------------------------------------------------
//superKeyword
//when try to accress child class constructor first need to parent class constructor
/*
class person{
constructor(){
    console.log("enter parent constructor");
}
}

class Engineer extends person{
    
    constructor(branch){
        console.log("enter child constructor");
        super(); // to evoke parent constructor
        this.branch=branch;
        console.log("exit child constructor");
    }
}
let pranav = new Engineer("computer engineer"); //create pranav object
*/

//----------------------------------------------------------------------------------

//we can use super keyword to put value in parent constructor using child class
/*
class person{
constructor(name){
    this.name = name;
}
}

class Engineer extends person{
    
    constructor(name){
        super(name); 
    }
}
let pranav = new Engineer("HondaCity");
console.log(pranav.name);
*/

//---------------------------------------------------------
/*
//promis--resolve/reject/pending
let getPromise = () =>{
    return new Promise((resolve, reject) => {
        console.log("i m a promise");
        resolve("sucessed");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled",res);
});
*/

/*
let getPromise = () =>{
    return new Promise((resolve, reject) => {
        console.log("i m a promise");
        reject("error");
    });
};

let promise = getPromise();
promise.catch((err) => {
    console.log("rejected",err);
});

*/

//-----------------------------------------------------------------------------------
/*
//Async-await
async function  harry(){
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("40C");
        },3000);
    });

    let MumbaiWaether = new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve("35C");
        },3000);
    });
     console.log("fetching data");
    let delhiW = await delhiWeather;
    console.log("delhi",delhiW);
    
     console.log("fetching data");
    let MumbaiW = await MumbaiWaether ;
    console.log("mumbai",MumbaiW);
    return [ delhiW, MumbaiW]  ;
}
console.log("wellcome to control room");
let c = harry();
console.log(c);


*/

//---------------------------------------------------------------------------------
/*
 const URL = "https://catfact.ninja/fact";
const getFacts = async() => {                            //getFacts()
    console.log("getting data....");
let response =await fetch(URL);
console.log(response); //json formate
let data = await response.json();  //input JSON and output JS object
console.log(data.fact);
};
*/

//----------------------------------------------------------------------------