
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





