"use strict";
// node 3_function.ts
Object.defineProperty(exports, "__esModule", { value: true });
function chakNum(num) {
    return num + 2;
}
chakNum(5);
// many type
function chakName(name, aeg, isPay) {
    var pas = "The name is ".concat(name, " and aeg ").concat(aeg);
    return pas;
}
chakName("ha", 30, true);
// arrow function
var arrow = function (name, aeg, isPay) {
    var pas = "The name is ".concat(name, " and aeg ").concat(aeg);
    return pas;
};
arrow("ha", 30, true);
