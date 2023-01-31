const express=require('express');

const dotenv=require('dotenv');
const jwt=require("jsonwebtoken");
const bcryptjs=require("bcryptjs");
const cookieParser=require("cookie-parser");


const app=express();

dotenv.config({path:"./config.env"}) ;
require('./db/conn');
const port =process.env.PORT;

const Users = require('./models/userSchema');
const Message=require('./models/messageSchema');
const authenticate=require("./middleware/authenticate");
app.use(express.json());
app.use(express.urlencoded({extented:false}));
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.send('Home Page');
})/*
app.get('/about',(req,res)=>{
    res.send('About Page');
})

app.get('/contact',(req,res)=>{
    res.send('Contact Page');
})*/
app.post('/signup',async (req,res)=>{
    try{
        const username=req.body.username;
        const lastname=req.body.lastname;
        const email=req.body.email;
        const password=req.body.password;
        const dob=req.body.dob;
        const createUser=new Users({
            username:username,
            lastname:lastname,
            email:email,
            password:password,
            dob:dob

        })
    
    const created=await createUser.save();
    console.log(created);
    res.status(200).send("registred");
}catch(error){
    res.status(400).send(error)
}
;})
app.post('/signin',async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const user = await Users.findOne({email:email});
        if(user){
            const isMatch=await bcryptjs.compare(password,user.password);
            if(isMatch){
                const token =await user.generateToken();
                res.cookie("jwt",token,{
                    expires:new Date(Date.now()+8600000),
                    httpOnly:true
                })
                res.status(200).send("loggedin");
            }else{
                res.status(400).send("invalid credentials");
            }
        }else{
            res.status(400).send("invalid input");
        }
    }catch(error){
        req.status(400).send(error)
    }

})

app.post("/message",async(req,res)=>{
    try{
        const name=req.body.name;
        const email=req.body.email;
        const subject=req.body.subject;

        const message=req.body.message;
        const sendMsg= new Message({
        name:name,
        email:email,
        subject:subject,
        message:message
        });
        const created=await sendMsg.save();
        console.log(created);
        res.status(200).send("sent")
    }catch(error){
        res.status(400).send(error)
    }
})
app.get('/logout',(req,res)=>{
res.clearCookie("jwt",{path:"/"})
res.status(200).send("User loggedout")
})
app.get('/auth',authenticate,(req,res)=>{
    
})















app.listen (port,()=>{
    console.log("server is listening at 8081")
}

);
