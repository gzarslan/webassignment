/***********************
 --Name:Gozde Arslan 
 --ID: 150320190 
 --Date: 13/03/2021
 --Purpose: Assignment 2 WEB322
  --***********************/

const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

//import database module
const fakeDB = require("./model/FakeDB.js");
//call express
const app = express();

//THIS TELLS THE APP OBJECT WHICH EXPRESS WHICH TEMPLATE ENGINE WE ARE USING
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
const sgMail = require("@sendgrid/mail");
require("dotenv").config({ path: "config/keys.env" });

//////////////////////////////// ----ROUTES----///////////////////////////////////
//HOME PAGE//
app.get("/", (req, res) => {
  //load index.handlebars
  res.render("home", {
    title: "home Page",
    hero: fakeDB.getAllHero(),
    All: fakeDB.getAllProducts(),
    MV: fakeDB.getMovies(),
    TV: fakeDB.getTv(),

    //  MV:fakeDB.getAllFeaturedProducts("mv"),
    //  TV:fakeDB.getAllFeaturedProducts("tv")
  });
});

//---SIGN UP---//
app.get("/sign", (req, res) => {
  res.render("sign", {
    title: "sign In",
  });
});
app.post("/sign", (req, res) => {
  if (req.body.firstName == "" || (req.body.firstName).length < 2) {
    error1 = "*First name must be  between 2 and 30 character long";
    res.render("sign", {
      title: "Sign In",
      error1: error1,
      
    });
  } else if (req.body.lastName === "" || (req.body.lastName).length < 2) {
    error2 = "*Last name must be between 2 and 30 character long";
    res.render("sign", {
      title: "Sign In",
      error2: error2,
     
    });
  }

  var emailControl = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z0-9_-]+)$/;

  if (!emailControl.test(req.body.email)) {
    error3 = "*Please enter your email address";
    res.render("sign", {
      title: "sign In",
      error3: error3,
      
    });
  }
  var passwordControl = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*){8,}/;
  if (!passwordControl.test(req.body.psw) ||(req.body.psw).length == "") {
    error5 = "*Please enter valid password";
    res.render("sign", {
      title: "sign In",
      error5: error5,
     
    });
  } else {
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
        res.redirect("/welcome");
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

//---LOGIN---//
app.get("/login", (req, res) => {
  //load about.handlebars

  res.render("login", {});
});
app.post("/login", (req, res) => {
  if (req.body.email === "") {
    error1 = "*Please enter valid email";
    res.render("login", {
      title: "log In",
      error1: error1,
    });
  } else if (req.body.psw === "") {
    error2 = "*Password must be 8 character length";
    res.render("login", {
      title: "Log In",
      error2: error2,
    });
  } else {
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
    const msg = {
      to: "gozdearslan2010@gmail.com", // Change to your recipient
      from: "garslan@myseneca.ca", // Change to your verified sender
      subject: "MooviE-x Registration Information",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong> You have successfully login</strong>",
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
        res.redirect("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

app.get("/payment", (req, res) => {
  res.render("payment", {
    title: "payment",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "contact Page",
  });
});
app.post("/contact", (req, res) => {
  res.render("contact", {
    title: "contact Page",
  });
});
app.get("/welcome", (req, res) => {
  res.render("welcome", {
    title: "Welcome",
  });
});

//----EACH PRODUCTS MOVIE ADN TV ROUTE---//
app.get("/products/:id", (req, res) => {
  //console.log(req.params.id)
  res.render("movieAndTvDescription", {
    product: fakeDB.getAProduct(req.params.id),
  });
});

//TV SHOWS ROUTE
app.get("/tv", (req, res) => {
  res.render("tv", {
    title: "Tv Shows",

    TV: fakeDB.getTv(),
  });
});
app.get("/all", (req, res) => {
  res.render("all", {
    title: "All movies",

    All: fakeDB.getAllProducts(),
  });
});
app.get("/movie", (req, res) => {
  res.render("movie", {
    title: "movies",
    MV: fakeDB.getMovies(),

    //  movies:fakeDB.getMovies()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Web Server is up and running on PORT ${PORT}`);
});
