interface user {
    readonly name : string,
    email : string,
    aeg? : number,
    function?: () => string,
    function1?(): string,
    getCoupon?(value:string,value2:number): number
}
let User: user = {name:"ashraful",email:"ashraful@gamal.com",
    function: () =>{ return "hi" } ,
    function1: () =>{ return "hi" },
    getCoupon:(name:"ashraful", aeg:17) => {
        return 2
    },
}

