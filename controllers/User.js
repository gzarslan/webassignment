/*********************USER ROUTES***************************/
const express = require('express')
const router = express.Router();
//const user =userModel(user);
router.use(express.static("public"));
const userModel = require('../models/User');
const bcrypt=require('bcryptjs');

const checkLogIn=require('../middleware/authentication.js');
const checkAdmin=require('../middleware/authorization.js');
const sgMail = require("@sendgrid/mail");

//import database module
const fakeDB = require('../models/FakeDB');
//const { findOne } = require('../models/User');

//Route to direct use to Registration form
router.get("/sign",(req,res)=>
{
    res.render("User/sign",{
    title:"Sign in"
  });
});

router.post("/sign", async (req, res) => {

  error1="";
  error2="";
  error3="";
  error4=""; 
  if (req.body.firstName == "" || (req.body.firstName).length < 2) {
    error1 = "*First name must be  between 2 and 30 character long";
  } 
   
  if (req.body.lastName === "" || (req.body.lastName).length < 2) {
    error2 = "*Last name must be between 2 and 30 character long";
   
  }
  var emailControl = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z0-9_-]+)$/;

  if (!emailControl.test(req.body.email)) {
    error3 = "*Please enter your email in email format";
   
  }
  var passwordControl = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*){8,}/;
  if (!passwordControl.test(req.body.psw) ||(req.body.psw).length<8) {
   
    error4 = "*Password need to be at least 8 char long with upper case";
  } 
  
  if (req.body.firstName == "" ||req.body.lastName === ""|| req.body.email ==""|| req.body.psw===""){
    
    res.render("User/sign", {
      title: "Sign In",
      firstName : req.body.firstName,
         lastName : req.body.lastName,
         email  : req.body.email,
          psw : req.body.psw,
        error1,
       error2,
       error3,      
      error4

      
    });

  } 
  else{
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
    const msg = {
      to: "gozdearslan2010@gmail.com", // Change to your recipient
      from: "garslan@myseneca.ca", // Change to your verified sender
      subject: "MooviE-x Registration Information",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong> Account Successfully Created </strong>",
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
        res.redirect("/User/profile");
      })
      .catch((error) => {
        console.error(error)
      
      });
    //   userSchema.pre('save',function(next){
    //     bcrypt.genSalt(10)
    //     .then((salt)=>{
    //       bcrypt.hash(this.password,salt)
    //       .then((encryptedPassword)=>{
    //       this.password=encryptedPassword;
    //       next();
    //       })  
    //       .catch()
    //     }));
    //     .catch()
    // });

    const salt= await bcrypt.genSalt(10);
    const enPsw= await bcrypt.hash(req.body.psw,salt);




       const newUser={
         firstName : req.body.firstName,
         lastName : req.body.lastName,
         email  : req.body.email,
          psw : enPsw};
         const user = new userModel(newUser);
         const returnUser=await user.save()         
       
         .then(()=>{
         
          req.session.userInfo=returnUser;
          res.redirect("/user/admin"); 
        
            
          })
        
          .catch(err=>console.log(`error happened when inserting data: ${err}`));
           
     }
      

  
});    

//Route to direct user to the login form
router.get("/login",async(req,res)=>
{
    res.render("User/login",{
      title : "login",
  });
});
router.post("/login",async(req,res)=>
{
 error1="";
 error2="";
 error3="";
  if (req.body.email === "") {
    error1 = "*Please enter valid email";
   
  } 
   if (req.body.psw === "") {
    error2 = "*Password must be 8 character length";
      
  } 
  if(error1|| error2){

    res.render("User/login",{
      title : "login",
      email:req.body.email,
      psw:req.body.psw,
      error1,
      error2
       })
  
  }
  else {
                const user = await userModel.findOne({email:req.body.email})  
               .then(user=>{

                //if email is not found
                if(user==null){
                  error3="Something wrong!  email or the password is wrong.";
                  res.render("User/login",{
                      title : "login",
                      email:req.body.email,
                      psw:req.body.psw,               
                      error1,
                      error2,
                      error3
                  });
                 }
                 //email found
                 else{

                   // userModel.findOne({psw:req.body.psw})

             //const isMatched = await bcrypt.compare(req.body.psw, user.psw)
                   
                     bcrypt.compare(req.body.psw, user.psw)
                     .then((isMatched)=>{
                        if(isMatched){
                          req.session.userInfo = user;
                          console.log(`user is ${user}`);
                          console.log("true");
                          res.redirect("/user/profile");
                        }
                        
                        else{
                            console.log("false");
                            error3="Something went wrong!  email or the password is wrong.";
                            res.render("User/login",{
                                title : "login",
                                email:req.body.email,
                                psw:req.body.psw,               
                                error1,
                                error2,
                                error3
                            
                          });
                        }
                     })
                     .catch(error=>console.log(error))
                    
                         
                          
                   }  


                 
            



               })
               .catch(err=>console.log(`Error ${err}`));   
              }  

   
});

router.get("/profile",(req,res)=>{
  res.render("User/profile", {
      title: "welcome"
  });
})


router.get("/admin",checkAdmin,(req,res)=>{
  res.render("User/admin", {
      title: "admin"
  });
})

router.get("/logout/",(req,res)=>{
  req.session.destroy();
  res.redirect('/');
});


router.get("/payment", (req, res) => {
  res.render("User/payment", {
    title: "payment",
  });
});
router.post("/payment", (req, res) => {
  res.render("User/payment", {
    title: "payment",
  });
});



router.get("/contact", (req, res) => {
  res.render("User/contact", {
    title: "contact Page",
  });
});
router.post("/contact", (req, res) => {
  res.render("contact", {
    title: "contact Page",
  });
});


module.exports=router;