interface Place{
    city?:string;
    pincode?:number
}


interface Check{
    name:string;
    age:number;
    address ?:Place;
}

let user:Check={
    name:"Sanskar",
    age:22,
    address:{
        city:"Pune",
        pincode:713403
    },
};

function isLegal(user:Check):boolean{
    if(user.age>=18){
        return true;
    }
    else{
        return false;
    }
}

const result = isLegal(user) ? "HE is legal" : "HE is not legal";
console.log(result);