// node 3_function.ts

function chakNum(num:number) {
    return num +2
}

chakNum(5)
// many type
function chakName(name:string , aeg:number , isPay:boolean) {
    let pas = `The name is ${name} and aeg ${aeg}`
    return pas
}
chakName("ha",30,true)


// arrow function
let arrow = (name:string , aeg:number , isPay:boolean) => {
    let pas = `The name is ${name} and aeg ${aeg}`
    return pas
}
arrow("ha",30,true)


export{}