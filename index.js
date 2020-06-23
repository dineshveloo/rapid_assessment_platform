const mongoose = require("mongoose");
mongoose.pluralize(null);
const connection = require("./model/db");
const express = require("express");
const application = express();
 const path = require("path");
const expressHandlerbars = require("express-handlebars");
const bodyparser = require("body-parser");


const UserController = require("./controller/users")
const session = require('express-session');
 //var dir = path.join(__dirname, 'views/images');
 application.use('/user', express.static('views/images'));
 application.use(express.static(__dirname + '/public'));
// application.use(express.static(dir));
application.use(express.static("views/images"));
application.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
application.use(bodyparser.json());
application.use(bodyparser.urlencoded({
    extended : true
}));

application.set('views', path.join(__dirname, "/views/"));
// application.set('images', path.join(__dirname, "/views/images"));
application.engine("hbs", expressHandlerbars({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutDir: __dirname + "views/layouts/"    
}));


application.set("view engine", "hbs")

application.get("/", (req, res)=>{
   // res.send('<h1>Hello World<h1>')
   res.render("index", {})
});

application.use("/user", UserController)

application.listen("3000", ()=>{
  console.log("Server Started")
});