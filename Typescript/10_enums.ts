enum minecraft {
    firstVersion = "1.16",
    secVersion ="1.21",
    thirdVersion ="1.21.4",
    lastVersion ="1.21.5"
}

let FirstVersion = minecraft.firstVersion;

// condition 2

interface User{
    name: string;
    email: string
}

interface Admin {
    name: string;
    email: string;
    isAdmin: boolean
}

function isAdminAccount(account:) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

// condition 3 

type Fish = {swim: ()=> void};
type Bird = {fly: ()=> void};

function isFish(pet:Fish|Bird):pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet:Fish|Bird) {
    if(isFish(pet)){
        pet
        return "fish food"
    }
    else{
        pet
        return "bird food"
    }
}