const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcryptjs=require('bcryptjs');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    lastname:{
        type:String,
        required:true,
        unique:true
    },


    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    dob:{
        type:String,
        required:true,
        unique:true
    },
    tokens:[{
        type:String,
        required:true,
        
    }]

});














//hashing the password

userSchema.pre("save" ,async function(next){
    if(this.isModified('password')){
        this.password=bcryptjs.hashSync(this.password,10);
    }
    next();
})


//genertae token to verify user
userSchema.methods.generateToken=async function(){
    try{
        let generatedToken=jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:generateToken});
        await this.save();
        return generatedToken;
    }catch(error){
        console.log(error)
    }
}












const Users=new mongoose.model("USER",userSchema);
module.exports=Users;