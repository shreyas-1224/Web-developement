const express = require('express');
const app = express();
const mongoose = require("mongoose");

let item_array = [];


mongoose.connect("mongodb://localhost:27017/todoList", { useUnifiedTopology: true, useNewUrlParser: true })

// creating schema
const todoList_schema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },

});

// creating model

const TodoList_model = new mongoose.model("TodoList_model", todoList_schema);

const item2 = new TodoList_model({ task: "Welcome to the to-do List" });
item2.save();


app.set('view-engine', 'ejs');            // setting view-engine..just like hbs

let items = [];
let workItems = [];
let week = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// serving static files..like css here

const publicPath = __dirname + "\\public";

app.use(express.static(publicPath));

// just like hbs , all ejs file should be inside views directory.
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    let day = new Date()

    TodoList_model.find((err, arr) => {

        res.render('list.ejs', {
            typeOfList: week[day.getDay()],
            newListItem: arr
        });
    });




});

app.get("/:custom_route" , (req , res) => {
    res.render("list.ejs" ,{
        typeOfList: req.params.custom_route,
        newListItem: []
    });
});

app.post('/', (req, res) => {
    if (req.body.newItem == "") {
        let i = 10;
        res.redirect('/');
    }

    else {
        // creating documents..
        const item1 = new TodoList_model({ task: req.body.newItem });

        // add to the collection.

        item1.save();
        // redirecting to set item value.
        res.redirect("/");
    }



});


app.post("/delete" , (req , res) => {
    // req.body is {checkbox : [ id1 , id2 , id3]}
    const checked_item = req.body.checkbox;
    TodoList_model.deleteOne({_id : checked_item} , (err) => {
        console.log(err);
    });
    res.redirect("/");
});


app.listen(8000, () => {
    console.log("You are a wonderful soul , shreyas!");
});