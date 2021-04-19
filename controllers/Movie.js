
/*********************Task ROUTES***************************/
const express = require('express')
const router = express.Router();
router.use(express.static("public"));
const mongoose = require('mongoose');
const movieModel = require('../models/Movie');

const path=require('path');
//import database module
const fakeDB = require("../models/FakeDB");
const isLogIn = require("../middleware/authentication");
const isAdmin = require('../middleware/authorization');
const { nextTick } = require('process');

//TV SHOWS ROUTE
router.get("/tv", async(req, res) => {
  try{
    const returnedFeaturedTVs=await movieModel.find({category:'tv',featured:true}); //await is working with async operation needs to return promise it does nt block execution
    const TV=returnedFeaturedTVs.map((products)=>{
      const {_id,
        title,
        category,
        rentalPrice,
        buyPrice,
        description,
        featured,
        picture}=products;
      return {_id,title,category,rentalPrice,buyPrice,description,featured,picture}
    });
    res.render("Movie/tv",{
      title:"tv shows",
     TV
  });
    

}
catch(error){
    console.log(`error happened because of ${error}`);              
}
  });


  //all movies routes
 router.get("/all", async(req, res) => {
    try{
 
      const returnedAll=await movieModel.find();
      const All=returnedAll.map((products)=>{
          const {_id,
            title,
            category,
            rentalPrice,
            buyPrice,
            description,
            featured,
            picture}=products;
              return {_id,title,category,rentalPrice,buyPrice,description,featured,picture}
     
      });
      res.render("Movie/all",{
        title:"Movies",
        All
    });
      
  
  }
  catch(error){
      console.log(`error happened because of ${error}`);              
  }
  });
  //movies 
  router.get("/movie",async(req, res) => {
    try{
 
      const returnedFeaturedMovies=await movieModel.find({category:'mv',featured:true});
      const movies=returnedFeaturedMovies.map((products)=>{
          const {_id,
            title,
            category,
            rentalPrice,
            buyPrice,
            description,
            featured,
            picture}=products;
              return {_id,title,category,rentalPrice,buyPrice,description,featured,picture}
     
      });
      res.render("Movie/movie",{
        title:"Movies",
        movies
    });
      
  
  }
  catch(error){
      console.log(`error happened because of ${error}`);              
  }
  });

  

router.get("/add", (req, res) => {
  
  res.render("Movie/add", {
   title:"Add movie"
  });
});


router.post("/add",(req,res)=>{
 //rules for inserting database

 
 var{
  title,
  category,
 titleYear,          
 buyPrice,
 rentalPrice,  
 description,
 featured          
}=req.body;
 let error1="",  
 error2="",
 error3="",
 error4="",
 error5="";
 error6="";
 
 if(!title) error1="movie title is required";
 if(!titleYear) error2="movie titleYear must be entered"; 
 if(!rentalPrice) error3="Rental price  is required";
 if(!buyPrice) error4="Purchase price  is required";
 if(!description)error5="description is required";
 if(!req.files) error6="File must be uploaded";

 if(error1||error2||error3||error4||error5||error6){
     res.render("Movie/add",{
         title:"add movie",
         error1,  
         error2,
         error3,
         error4,
         error5,
         error6,
         title,
         category,
         titleYear,
         buyPrice,
         rentalPrice,
         description,
         featured,
         
     })
 }
 else{
      const newMovie = {
      title:req.body.title,     
      category:req.body.category,
      titleYear:req.body.titleYear,
      rentalPrice:req.body.rentalPrice,
      buyPrice:req.body.buyPrice,
      description:req.body.description,
      featured:req.body.featured  
         
      };
      

      const movie = new movieModel(newMovie);
         movie.save()
         .then((movie)=>{
           
            const ext=['.jpg','.png'];
            if (req.files.picture &&ext.includes(path.parse(req.files.picture.name).ext))
           {
              req.files.picture.name=`/images/${movie._id}${path.parse(req.files.picture.name).ext}`
              req.files.picture.mv(`public/${req.files.picture.name}`)
              .then(()=>{

                movieModel.updateOne({_id:movie._id},{
                  picture:req.files.picture.name
              })
              .then(()=>{
              res.redirect("/");
              
              })
              .catch(error=>console.log(`Error during reading from database: ${error}`));
            

            }) 
            .catch(error=>console.log(`Error during reading from database: ${error}`));
           }
       })
           .catch(error=>console.log(`Error during reading from database: ${error}`));
         
     }
       
 
      

})


router.get("/listing/:_id",(req,res)=>{

  console.log(`_id is ${req.params._id}`);
  movieModel.findOne({_id:req.params._id})
  .then((returnMovies)=>{

      
        const movieDetail={
          
            _id:returnMovies._id ,
            title:returnMovies.title,   
            category:returnMovies.category,        
            titleYear:returnMovies.titleYear,           
            buyPrice:returnMovies.buyPrice,
            rentalPrice:returnMovies.rentalPrice,  
            description:returnMovies.description,
            featured:returnMovies.featured,
            picture:returnMovies.picture
        };
        
        console.log(`movieDetail is ${movieDetail}`);
     
      res.render("Movie/movieDetails",{
          title:"",
         movieDetail
      });
  })
  .catch(error=>console.log(`Error during reading from database: ${error}`));


});



router.get("/edit/:_id",(req,res)=>{

  // taskModel.find() when youwant to pull multiple value collection
   movieModel.findById(req.params._id) //always return one object
   .then((movie)=>{

       const {_id,
         title,
         category,
        titleYear,   
        buyPrice,
        rentalPrice,  
        description,
        featured,
        picture
      }=movie;

       res.render("Movie/edit",{
        _id, 
        title,   
        category,     
        titleYear,       
        buyPrice,
        rentalPrice,  
        description,
        featured,
        picture
       
    
           
           
       })

   })
   .catch(err=>console.log(`error occurs ${err}`));

 

});

router.put("/update/:_id",(req,res)=>{

  const {  
    title,   
    category,    
    titleYear,       
    buyPrice,
    rentalPrice,  
    description,
    featured,
    picture
   }=req.body;  
   
 

  const movie={
    
    title,
    category,        
    titleYear,       
    buyPrice,
    rentalPrice,  
    description,
    featured,
    picture
   
  };

  movieModel.updateOne({_id:req.params._id},movie)
  .then(()=>{
      res.redirect("/movie/all");
  })
  .catch(error=>console.log(`Error during updating one document from database: ${error}`));

})

router.delete("/delete/:_id",(req,res)=>{
  console.log("here");
  movieModel.deleteOne({_id:req.params._id})
  .then(()=>{
      console.log("delete");
      res.redirect("/");
  })
  .catch(error=>console.log(`Error during deleting one document from database: ${error}`));

});

//search wrapper route
router.post("/search", async(req,res)=>{

//   try{
//     const {searchValue}=req.body;   
//        let returnMovies= await movieModel.find().where("title").regex(`${searchValue}`);
  
   
 

//     if(returnMovies.length==0 ){
//         msg= "Sorry, can't find the movies";
//     }
//     else{
      
//       movieModel.findOne({title:req.body.searchValue})
//       .then((returnMovies)=>{
    
          
//             const searchDetail={
              
//                 _id:returnMovies._id ,
//                 title:returnMovies.title,   
//                 category:returnMovies.category,        
//                 titleYear:returnMovies.titleYear,           
//                 buyPrice:returnMovies.buyPrice,
//                 rentalPrice:returnMovies.rentalPrice,  
//                 description:returnMovies.description,
//                 featured:returnMovies.featured,
//                 picture:returnMovies.picture
//             };
            
//             console.log(`movieDetail is ${searchDetail}`);
         
//           res.render("Movie/searchPage",{
//               title:"",
//               searchDetail
//           });
//       })
//       .catch(error=>console.log(`Error during reading from database: ${error}`));
//     }

// }
// catch (error) {
//     console.log(` ${error}`);
// }
try{
  const {search}=req.body;
  let filterByTitle= movieModel.find().where("movie_title").regex(`${search}`);
 
  let movies=[];
  let msg="";

  if(filterByTitle.length==0){
      msg= "Sorry, can't find the movies";
  }
  else{
      if (filterByTitle.length>0){
          movies=filterByTitle.map((movie)=>{
            const {_id,
              title,
              category,
             titleYear,   
             buyPrice,
             rentalPrice,  
             description,
             featured,
             picture
           }=movie;
              return {_id,
                title,
                category,
               titleYear,   
               buyPrice,
               rentalPrice,  
               description,
               featured,
               picture
             }
          });
      }
     
  } 

  res.render("Movie/searchPage",{
      title:"searchResult",
      msg,
      movies,
  });


}
catch (error) {
  console.log(` ${error}`);
}


});
 
router.get("/dashboard", (req, res) => {
  
  res.render("Movie/dashboard", {
   title:"get movie"
  });
});

  
router.get("/payment", (req, res) => {
  
  res.render("User/payment", {
   title:"get movie"
  });
});
router.post("/payment", (req, res) => {

  res.render("User/payment", {
   title:"get movie"
  });
});

module.exports=router;
