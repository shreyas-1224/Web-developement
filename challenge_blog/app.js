//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const _ = require('lodash');

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const array_method = require("./packages");

let posts = [];

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));


app.get('/' , (req , res) => {
    res.render('home.ejs', {
      p1 : homeStartingContent,
      post_array : posts,
    });
});


app.get('/about' , (req , res) => {
  res.render('about.ejs', {
    p2 : aboutContent, 
  });
});


app.get('/contact' , (req , res) => {
  res.render('contact.ejs', {
    p3 : contactContent, 
  });
});


app.get('/compose' , (req , res) => {
  res.render('compose.ejs',);
});


app.post('/' , (req ,res) => {

  
  if(req.body.blog_text === "")
      res.redirect('/compose');

  else{
      const new_obj = {
        blog_title : req.body.blog_title,
        blog_text : req.body.blog_text,
        }
      posts.push(new_obj);
  
      }

      res.redirect('/compose');

});

app.get('/posts/:post_title' , (req , res) => {
  
  const post_t = _.lowerCase(req.params.post_title) ;
  
  posts.forEach(function(i){
    
    if(_.lowerCase(i.blog_title) == post_t)
      res.render('post.ejs' , {
        title : i.blog_title,
        content : i.blog_text,
      });
  
  });

});




app.listen(3000, function() {
  console.log("your wishes are being completed by the universe!");
});
