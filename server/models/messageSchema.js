const mongoose=require('mongoose');
const msgSchema =new mongoose.Schema({
    name:{
   type:String,
   require:true,
    },
    email:{
        type:String,
        require:true,
    },
    subject:{
        type:String,
        require:true,
    },
    msg:{
        type:String,
        require:true,
    }
})
Message=new mongoose.model("MSG",msgSchema);
module.exports=Message;
