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
        protected lang:string
    ){
        this.name = name
        this.aeg = aeg
    }
}







