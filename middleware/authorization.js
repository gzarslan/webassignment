const checkAdmin=(req,res)=>{

    if(req.session.userInfo.userType==="admin"){
       res.render("User/adminDashboard")
    }
    else{
        res.render("/user/welcome");
    }
}

module.exports=checkAdmin;