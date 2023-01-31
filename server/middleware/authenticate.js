const Users=require('../models/userSchema');
const jwt=require('jsonwebtoken');

const authenticate =async(req,res,next)=>{
    try{
        const token =req.cookies.jwt
        if(!token){
            res.status(401).send("no token")
        }else{
            const verifytoken =jwt.verify(token,process.env.SECRET_KEY);
            const rootUser=await Users.findOne({_id:verifytoken,_id,"tokens.token":token});
            if(!rootUser){
                res.status(401).send("user not found")
            }else{
                res.status(200).send("authorized user")
            }
        }
    
    next()

}catch(error){
    res.status(401).send("error")
}
}

module.exports =authenticate;