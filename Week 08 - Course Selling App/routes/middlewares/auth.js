const jwt=require("jsonwebtoken");
const JWT_SECET="sanskar147852369";

function authenticationUser(req,res,next){
    const authHeader = req.headers.authorization;

    if(authHeader && authHeader.startsWith("Bearer")){
        const token =authHeader.split(" ")[1];
        try{
            cons//to be completed
        }
    }
};

function authenticationAdmin(req,res,next){

};