const fs = require("fs");

const bioData = {
    name : "shreyas",
    age : 23 ,
    salary : 2000000,
    successfull : true 
}

// convert into json

const json_data = JSON.stringify(bioData);

// sending json data to another file.

fs.writeFile("jsn.json" , json_data , (err) =>{
    console.log(err);
})

// reading json data from that file. 

fs.readFile("jsn.json" , "utf-8" , (err , data)=>{
    console.log(err);
    const new_data = JSON.parse(data);
    console.log(new_data);    
});


