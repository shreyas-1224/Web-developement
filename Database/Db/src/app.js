// task : create database and two collections. with atleast two entrys

const mongoose = require("mongoose");

// creating connection and database : 
mongoose.connect("mongodb://localhost:27017/mydatabase" , {useNewUrlParser : true , useUnifiedTopology : true}) ;


// creating new schema for another collection. using built in validation.



const studentSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : [true , "name is compulsory"]
    } , 
    hobby : {
        type : String ,
        required : true , 
    } ,

    address :{
        type : String ,
        required : true
    } ,
    
    contact : {
        type : Number , 
        required : true 
    }
});


// creating model ... (class)

const Student_info = new mongoose.model("Student_info" , studentSchema);

// creating docs ... object for collections

var doc3 = new Student_info({
    name : "shreyas Pradeep Patil",
    hobby : "reading and talking" ,
    address : "Pune",
    contact : 9359
});

var doc4 = new Student_info({
    name : "Amruta Gavali" , 
    hobby : "drawing" , 
    address : "Mumbai" , 
    contact : 90110
});


  

//  relationships and embedding Documents : 
// lets mix two collection , Student_info and Personal_info.
// we want to include student info in personal_info... then first 
// update its schema and add another entry and give it a type of schema of collection to be added. 
personalSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : [true , "name is compulsory"]
    } , 
    salary : {
        type : Number ,
        required : true , 
        min : 1000000 , 
        max : 2500000 ,
    } ,

    agree : {
        type : Boolean,
        required : true , 
    } , 
    
    position : {
        type : String , 
        required : true 
    } ,

    // new entry : 

    student_information : {
        type : studentSchema 
    }
}); 

const Personal_info = new mongoose.model("Personal_info" , personalSchema);

// creating document with new schema . 

var doc5 = new Personal_info({
    name : "shreyas pradeep patil" ,
    salary : 2000000,
    agree : true , 
    position : "product manager" ,
    student_information : doc3
});

Personal_info.collection.insertOne(doc5 , (err) => {
    console.log("heyy");
})