const checkLogIn=(req,res)=>{

    if(req.session.userInfo){
        res.render("User/welcome");
    }
  
}

module.exports=checkLogIn;