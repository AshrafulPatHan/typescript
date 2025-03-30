interface user {
    readonly name : string,
    email : string,
    aeg? : number,
    function?: () => string,
    function1?(): string,
    getCoupon?(value:string,value2:number): number
}

interface user {
    gitHub : string
}

interface admin extends user {
    role : "Admin" | string
}

let User: user = {name:"ashraful",email:"ashraful@gamal.com",gitHub:"ashraful github",
    function: () =>{ return "hi" } ,
    function1: () =>{ return "hi" },
    getCoupon:(name:"ashraful", aeg:17) => {
        return 2
    },
}

let UserAdmin: admin = {name:"ashraful",email:"ashraful@gamal.com",gitHub:"ashraful github",role:"Admin",
    function: () =>{ return "hi" } ,
    function1: () =>{ return "hi" },
    getCoupon:(name:"ashraful", aeg:17) => {
        return 2
    },
}





