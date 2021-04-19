const checkAdmin=(req,res)=>{

    if(req.session.userInfo.type=="admin"){
       res.render("User/adminDashboard")
    }
    else{
        res.render("/user/welcome");
    }
}

module.exports=checkAdmin;