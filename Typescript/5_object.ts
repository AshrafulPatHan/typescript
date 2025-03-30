// node 5_object.ts
let det = {
    name : "ashraful",
    aeg : 17,
    employ : false
}

function personData({name:string,aeg:number,employ:boolean}) {
    return "hi"
}

personData(det);

// ---
let deltas = {
    name : "ashraful",
    aeg : 17,
    employ : false
}

function personnelData():{name:string,aeg:number,employ:boolean} {
    return {name:"string",aeg:1,employ:true}
}

personnelData();

export{}