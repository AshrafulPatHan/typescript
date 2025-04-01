// tsc index.ts
// tsc -w => to compile code into dist folder

console.log("the code is working still");

// class
class code {
    name: string
    // email:string
    // aeg : number
    time!: number

    constructor(
        name:string,
        public readonly email:string,
        private aeg:number,
        protected lang:string = "typescript"
    ){
        this.name = name
        this.aeg = aeg
    }

    public getAeg(){
        return `my aeg is ${this.aeg} `
    }

}

const Dave = new code("ashraful","ash@gamal",17,"typescript")

console.log(Dave.getAeg);
console.log(Dave.name);
console.log(Dave.email);
console.log(Dave.aeg);
console.log(Dave.lang);

