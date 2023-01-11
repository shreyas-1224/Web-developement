const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const posts = [];


app.get("/" , (req ,res)=>{

  res.render("home" , {
    quote : "shreyas", 
    posts : posts});
});


app.get("/posts/:id" , (req , res)=>{
  const id = _.lowerCase(req.params.id);
  let i = 0;
  while(i < posts.length){
    if(_.lowerCase(posts[i].title) == id){
        break;
    }
    i++;
  }
  if(i == posts.length){
    res.render("error" , {});
  }
  else{
    res.render("post" , {title : id ,
      content: posts[i].content
    });
  }
});

app.get("/about" , (req ,res)=>{
  res.render("about" , {});
});

app.get("/contact" , (req ,res)=>{
  res.render("contact" , {});
});

app.get("/compose" , (req , res)=>{
  res.render("compose" , {});
});

app.post("/compose" , (req , res)=>{
  const post = {};

  post.title = req.body.title;
  post.content = req.body.content;
  
  //console.log(post);
  posts.push(post)
  res.redirect("/");
});


app.listen(3300 , ()=>{
  console.log("Universe is helping you Shreyas");
});





app.listen(3000, function() {
  console.log("Server started on port 3000");
});
