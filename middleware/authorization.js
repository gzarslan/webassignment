const checkAdmin=(req,res)=>{

    if(req.session.userInfo.type=="admin"){
         res.render("User/profile");
    }
    else{
        res.render("User/welcome");
    }
}

module.exports=checkAdmin;