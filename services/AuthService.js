const userModel=require("../model/User.js");


exports.getLoginView=(req,res,next)=>{



    res.render("User/login")
};
exports.authenticate=(req,res,next)=>{
  const userName=req.body.userName;
  const psw=req.body.psw;
  const err =[];
  if (userName===""){

   err.push("you must enter")


  }

  if(psw==""){



  }
  if(err.length>0){

res.redirect

  }



    res.render("User/login")
};