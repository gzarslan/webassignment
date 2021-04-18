
const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;
const bcrypt = require("bcryptjs");


const userSchema = new Schema({
    //task prorperties
    type:{

      type:String,
      default:"user"
    },
  firstName: {
   type:String,
   required:true,


  } ,
  lastName:{
    type:String,
    required:true,

  },
  email:{

    type:String,
    required:true,
  },
 
  psw:{

    type:String,
    required:true,
  },
  
  
});



const userModel = mongoose.model('user', userSchema);
//module.exports = taskModel;
//module.exports=router;
module.exports = userModel;


