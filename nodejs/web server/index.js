// creating our own server in nodejs

const chalk = require('chalk');

//importing http module. 
const http = require("http");

// create a server
const server = http.createServer((req , res) => {
    if(req.url === "/about"){
        res.write("hello from the universe . About me ? I love you");
        res.end();
    }
    else if(req.url === "/contact"){
        res.write("You are in contact with the universe");
        res.end();
    }
    else{
        res.writeHead(404 , {"content-type" : "html/text"});             // not found code. if we not write this , it will show code 200(success)
        res.write("<h1>error 404 : page doenst exist</h1>");
        res.end();
    }
});

//  listen to the request . use listen method. parameters : port_number , local host , callback

server.listen("8000" , "127.0.0.1" , ()=>{
    console.log(chalk.bgGreen.white.bold("universe is listening to you"));
});

server.end();