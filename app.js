const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")

const app = express();

app.set("view engine",'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

let items = [];

app.listen(3000,function(){
    console.log("Server is up and running");
})

app.get("/",function(req,res){
   
    let day = date.getDate();
    res.render("list",{kindOfDay:day, newListItems:items});


})

app.post("/",function(req,res){
  let item = req.body.newItem;
  items.push(item);
    res.redirect("/");
})

app.get("/about",function(req,res){
    res.render("about");
})

app.post("/about",function(req,res){
    res.redirect("/");
})