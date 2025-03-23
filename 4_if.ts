// node 4_if.ts

function condition(value:number): boolean | string {
    if (value > 5) {
        return true
    }
    return "the number is bigger than 5"
}

let data = ["hi","by","tata"]
data.map(data =>{
    return `the data is ${data}`
})

let tata = ["hi",2,"tata"]
tata.map((tata:string | number) =>{
    return `the data is ${tata}`
})

let bay = ["hi",2,"tata"]
tata.map((tata:string | number):string =>{
    return `the data is ${bay}`
})

export{}

