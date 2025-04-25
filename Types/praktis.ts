// tsc praktis.js

// declaring variable and type and console.log for print the code
let start:string = "bismella";

console.log(start);

// declaring dynamic type 

// ex -- 1
let string : string = " "

string = "hello";

console.log(string);

// ex -- 2

type later = string;

let later:later = "";

later = "mama";

// ex -- 2

let countMama:number;

function gitNum(){
   return 2;
};
countMama = gitNum();

// ex -- 3

// const Bull:string|number ;

// Bull = "kaku"


let bullBull:string|number;

bullBull = "kaku";

// declaring function

// 1

function functions(type:string) {
   return 2;
};
functions("hello-2");

// 2

function functions_2(type:string,num:number,boll:boolean) {
   return 2;
};
functions_2("hello-2",3,false);

// 3

function functions_3(type:string,num:number,boll:boolean):string {
   return "howrah";
};
functions_3("hello-2",3,false);

let arrow = (fun:string):number => {
   return 2;
};
arrow("hi");

// condition declaring

function condition(value:number): boolean | string {
   if (value > 5) {
       return true;
   };
   return "the number is bigger than 5";
};
condition(5);

// data mapIng
let tata = ["hi",2,"tata"];
tata.map((tata:string | number) =>{
    return `the data is ${tata}`;
});

const data = ["hello","mama",false];
data.map((data:string|boolean) => {
   return`tata is ${data}`;
});

// Object declaring

let Object = {
   name:"ashraful",
   aeg:17,
   employ : false
};

function myData({name:string,aeg:number,employ:boolean}) {
   return "Ashraful Pathan";
};

// 2

myData(Object)
function MyData({name:string,aeg:number,employ:boolean}):{name:string,aeg:number,employ:boolean} {
   return {name:string,aeg:number,employ:boolean};
};
myData(Object);

// 3

type myData = {name:string,aeg:number,employ:boolean};


function MyAta({name:string,aeg:number,employ:boolean}):myData {
   return {name:string,aeg:number,employ:boolean};
};
MyAta(Object);

// 4

// function MydatA(myData):myData {
//    return {name:string,aeg:number,employ:boolean};
// };
// MydatA(Object);

// Types |||||
type User = {
   readonly name: string;
   aeg: number;
   isPay: boolean
}

function createUser(data:User) {
   
}

// Array

const Array = ["Ashraful",17,false]

const inside : number[][] = [
   [1,2,]
]
const arrayObject : { hi: string; rating: number }[] = [
   {
      hi:"hello",
      rating : 10
   }
];

const mixedArray: (number | { hi: string; rating: number })[] = [
   5,
   {
   hi: "hello",
   rating: 10
   }
];
 
 
const mixedArray2:any = [
   5,
   {
      hi: "hello",
      rating: 10
   }
];
  















export{}