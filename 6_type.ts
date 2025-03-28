// node 6_type.ts

type User = {
    readonly name: string;
    aeg: number;
    isPay: boolean
}

function createUser(data:User) {
    
}

type hi = {
    hi : string
}

type hello = {
    hello: string
}

type tata = hi & hello & {
    byby : string
}


