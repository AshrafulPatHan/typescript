// tsc praktis.js

// declaring variable and type and console.log for print the code
let start:string = "bismella";

console.log(start);

// declaring dynamic type 

// ex -- 1
let string : string = " "

string = "hello"

console.log(string);

// ex -- 2

type later = string;

let later:later = ""

later = "mama"

// ex -- 2

let countMama:number;

function gitNum(){
   return 2
};
countMama = gitNum()

// ex -- 3

// const Bull:string|number ;

// Bull = "kaku"


let bullBull:string|number;

bullBull = "kaku"

// declaring function

// 1

function functions(type:string) {
   return 2
};
functions("hello-2")

// 2

function functions_2(type:string,num:number,boll:boolean) {
   return 2
};
functions_2("hello-2",3,false)

// 3

function functions_3(type:string,num:number,boll:boolean):string {
   return "howrah"
};
functions_3("hello-2",3,false)

let arrow = (fun:string):number => {
   return 2
}
arrow("hi")






export{}