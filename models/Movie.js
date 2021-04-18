
const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const movieSchema = new Schema({
    //task prorperties
    title: {
   type:String,
   required:true,


  } ,
  
    category:{
    type:String,
    required:true,

  },
  
    titleYear:{

    type:Number,
    required:true,
  },
  
  rentalPrice:{

    type:Number,
    required:true,
  },
  
  buyPrice:{

    type:Number,
    required:true,
  },
  description:{

    type:String,
    required:true,
  },
  
  featured:{

    type:Boolean,
    required:true,
  },

  picture:{

    type:String,
   
  },
  
  dateCreated:{
    type:Date,
    default:Date.now()
  },
  createdBy:{

    }
   
  
  
});

const movieModel = mongoose.model('movie', movieSchema);
module.exports = movieModel;