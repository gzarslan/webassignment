const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
//import database module
const fakeDB = require("../models/FakeDB.js");
const movieModel = require('../models/Movie');
/*GENERAL ROUTES*/
router.use(express.static("public"));

//Route to direct user to home page
// router.get("/",(req,res)=>
// {  

//     res.render("General/home", {
//       title: "home Page",
//       hero: fakeDB.getAllHero(),
//       All: fakeDB.getAllProducts(),
//       MV: fakeDB.getMovies(),
//       TV: fakeDB.getTv()
//       //  MV:fakeDB.getAllFeaturedProducts("mv"),
//       //  TV:fakeDB.getAllFeaturedProducts("tv")
//     });
    
// })
router.get("/",async(req,res)=>{

  try{
      const returnedFeaturedMovies=await movieModel.find({category:'mv',featured:true});
      const movies=returnedFeaturedMovies.map((products)=>{
          const {
            _id,
            title,
            category,
            rentalPrice,
            buyPrice,
            description,
            featured,
            picture
          }=products;
              return {_id,title,category,rentalPrice,buyPrice,description,featured,picture}
      });

      const returnedFeaturedTVs=await movieModel.find({category:'tv',featured:true});
      const TV=returnedFeaturedTVs.map((products)=>{
        const {
          _id,
          title,
          category,
          rentalPrice,
          buyPrice,
          description,
          featured,
          picture}=products;
        return {_id,title,category,rentalPrice,buyPrice,description,featured,picture}
      });

      

      res.render("General/home",{
          title : "home",
          movies,
          TV
          
      });
  }
  catch(error){
      console.log(`error happened because of ${error}`);              
  }

})

module.exports=router;