//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const posts = [];


app.get("/" , (req ,res)=>{
  res.render("home" , {posts : posts});
});


app.get("/posts/:id" , (req , res)=>{
  const id = _.lowerCase(req.params.id);
  for(let i = 0;i < posts.length; i++){
    if(posts[i].title == id){
      res.render("post" , {
        title : id , 
        content : posts[i].content  
      });
    }  
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
