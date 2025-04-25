"use strict";
// tsc praktis.js
Object.defineProperty(exports, "__esModule", { value: true });
// declaring variable and type and console.log for print the code
var start = "bismella";
console.log(start);
// declaring dynamic type 
// ex -- 1
var string = " ";
string = "hello";
console.log(string);
var later = "";
later = "mama";
// ex -- 2
var countMama;
function gitNum() {
    return 2;
}
;
countMama = gitNum();
// ex -- 3
// const Bull:string|number ;
// Bull = "kaku"
var bullBull;
bullBull = "kaku";
// declaring function
// 1
function functions(type) {
    return 2;
}
;
functions("hello-2");
// 2
function functions_2(type, num, boll) {
    return 2;
}
;
functions_2("hello-2", 3, false);
// 3
function functions_3(type, num, boll) {
    return "howrah";
}
;
functions_3("hello-2", 3, false);
var arrow = function (fun) {
    return 2;
};
arrow("hi");
// condition declaring
function condition(value) {
    if (value > 5) {
        return true;
    }
    ;
    return "the number is bigger than 5";
}
;
condition(5);
// data mapIng
var tata = ["hi", 2, "tata"];
tata.map(function (tata) {
    return "the data is ".concat(tata);
});
var data = ["hello", "mama", false];
data.map(function (data) {
    return "tata is ".concat(data);
});
// Object declaring
var Object = {
    name: "ashraful",
    aeg: 17,
    employ: false
};
function myData(_a) {
    var string = _a.name, number = _a.aeg, boolean = _a.employ;
    return "Ashraful Pathan";
}
;
// 2
myData(Object);
function MyData(_a) {
    var string = _a.name, number = _a.aeg, boolean = _a.employ;
    return { name: string, aeg: number, employ: boolean };
}
;
MyData(Object);
myData(Object);
function MyAta(_a) {
    var string = _a.name, number = _a.aeg, boolean = _a.employ;
    return { name: string, aeg: number, employ: boolean };
}
;
MyAta(Object);
