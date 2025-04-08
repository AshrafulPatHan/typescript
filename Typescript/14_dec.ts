// 14_dec.ts

function detectType(val: string | number) {
   if (typeof val === "string") {
      return val.toLowerCase()
   }
   return val + 3;
}


