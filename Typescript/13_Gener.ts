// 
const score :Array<number> = []
const names :Array<string> = []


function returnValue(val:string|boolean):string|boolean {
   return val
}

function returnAny(val:any):any {
   return val
}

function returnType<Type>(val:Type):Type {
   return val
}

// returnType("3")

function returnType4<T>(val:T):T {
   return val
}

interface Bootle{
   brand:string 
   con:number 
}

let UseBootle : Bootle = {
   brand:"kindly",
   con:3
}

returnType4<Bootle>({
   brand:"kindly",
   con:5
})

function returnArray<T>(val:T[]):T {
   return val[3]
}


let returnArrow = <T,>(value:T):T =>{
   return value
}

function anotherFunction<T,U>(val:T,val2:U):object {
   return {
      val,
      val2
   }
}

function anotherSecFunction<T,U extends number>(val:T,val2:U):object {
   return {
      val,
      val2
   }
}

anotherSecFunction("2",3)


