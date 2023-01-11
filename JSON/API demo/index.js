// create a simple server and listen to it. 

const http = require("http");
const fs = require("fs");

const server = http.createServer((req , res)=>{
    if(req.url === "/about"){
        res.write("i am good , how are you?");
        res.end();
    }

    else if(req.url === "/contact"){
        res.write("we are always in contact with you");
        res.end();
    }

    else if(req.url === "/userapi"){
        fs.readFile(`${__dirname}` + "\\" + "jsn.json" , 'utf-8' , (err , data)=>{
            res.write(data);
            res.end();
            console.log(err);
        });
    }

    else{
        res.writeHead(404 , {"content-type" : "text/html"});
        res.write("<h1>error!</h1>");
    }
});


// listening to request

server.listen("3000" , "127.0.0.1", ()=>{
    console.log("youu are being listened");
});