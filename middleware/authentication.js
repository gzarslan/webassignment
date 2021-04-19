const checkLogIn=(req,res)=>{
    if(req.session.userInfo){
        res.render("General/home")
    }
    else{
        res.redirect("/user/login");
    }

}

module.exports=checkLogIn;