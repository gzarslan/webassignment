/***********************
 --Name:Gozde Arslan 
 --ID: 150320190 
 --Date: 13/03/2021
 --Purpose: Assignment 2 WEB322
  --***********************/

const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');


//import session
const session = require('express-session');


//import routes
const generalController = require("./controllers/General.js");
const userController = require("./controllers/User.js");
const movieController = require("./controllers/Movie.js");


const app = express();
app.use(express.static("public"));
app.use(fileUpload());
//THIS TELLS THE APP OBJECT WHICH EXPRESS WHICH TEMPLATE ENGINE WE ARE USING

require("dotenv").config({ path: "config/keys.env" });
//helpers for edit handlebars
app.engine("handlebars", exphbs({

  helpers:{
    is_mv:function(type){
        if(type==="mv")
            return "selected";
    },
    is_tv:function(type){
        if(type==="tv")
            return "selected";
    },
    is_featured:function(featured){
        if(featured==="yes")
            return "selected";
    },
    not_featured:function(featured){
        if(featured==="no")
            return "selected";
    }
}


}));

app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use((req,res,next)=>{
  if(req.query.method=="PUT"){
  req.method="PUT";
  }
  else if(req.query.method=="DELETE"){
    req.method="DELETE";  
    }
  next();
  });
app.use(session({
  secret: `${process.env.SECRET_KEY}`,
  resave: false,
  saveUninitialized: true
}))


//set up locals using session
app.use((req,res,next)=>{
  res.locals.user=req.session.userInfo;
  res.locals.movie=req.session.movieInfo;

  //console.log(req.session.userInfo);
 // res.locals.cart=req.session.cart; //an array of object will be for product
  next();
})








 app.use("/",generalController);
  app.use("/user",userController);
 app.use("/movie",movieController);


// app.use("/",generalRoutes);
// app.use("/user",userRoutes);
// app.use("/movie",movieRoutes);

 app.use("/",(req,res)=>{
    res.render("General/404");
 });

//call express





mongoose.connect(process.env.MONGO_DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
console.log(`connected the databasae`);
})
.catch(err=>console.log(`error occurs`));
const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Web Server is up and running on PORT ${PORT}`);
});
