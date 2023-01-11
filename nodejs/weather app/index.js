


/* create server

const http = require("http");
const fs = require('fs');
var request = require("requests");
// read synchrounously

const homefile = fs.readFileSync('home.html', 'utf-8');
// replacing value
// last temperature will have all values replaced.
const replace_val = (temp_val , org) =>{
    let temperature = temp_val.replace("{% temp_val %}" , org.main.temp);
    temperature = temperature.replace("{% temp_city %}" ,org.name  );
    temperature = temperature.replace("{% temp_country %}" , org.sys.country );
    temperature = temperature.replace("{%  temp_min_value %}" , org.main.temp_min);
    temperature = temperature.replace("{% temp_max_val %}" , org.main.temp_max);
    return temperature;
}


const server = http.createServer((req, res) => {
    if (req.url == '/') {

        request('https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=8e7c4c0021d5e94d2aab790ec8b5416c')
            .on('data', (chunk) => {
                const obj = JSON.parse(chunk);
                const arr = [obj];
                const realTimeData = arr.map((val)=> replace_val(homefile,val)).join("");
                res.write(realTimeData);                
            })
            .on('end', (err)=> {
                if (err) return console.log('connection closed due to errors', err);
                console.log('end');
                res.end();
            });
    }
});


server.listen(3000 , "127.0.0.1");

*/


// creating server

const http = require("http");
const fs = require("fs");
const request = require("requests");

// reading synchronously html file . 

const html_file = fs.readFileSync("home.html", 'utf-8');

// function to replace_val , used in map.

const replace_val = (val, home_file) => {
    // now we have an arr which contains values which we need to replace in html file.
    var temperature = home_file.replace("{% temp_val %}", val.main.temp);
    var temperature = temperature.replace("{% temp_min_value %}", val.main.temp_min);
    var temperature = temperature.replace("{% temp_max_val %}", val.main.temp_max);
    var temperature = temperature.replace("{% temp_city %}", val.name);
    var temperature = temperature.replace("{% temp_country %}", val.sys.country);

    return temperature;
};


const server = http.createServer((req, res) => {
    // use request module to request and get data.
    if (req.url == "/") {
        // use request (requests module) to read request and write;
        // we have used like , request("string").on("data" ...).on("end" ...).on("error" ...);

        request("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=8e7c4c0021d5e94d2aab790ec8b5416c")
            .on("data", (chunk) => {

                // chunk data is in json format. need to parse it. 
                var obj = JSON.parse(chunk);

                // obj is object. convert it into an array.
                var arr = [obj];

                // writing a function which replaces these varibles and return replaced html file.
                // new_array is an array which contains html code. join it .
                
                const new_array = arr.map((val)=> replace_val(val , html_file)).join("");
                res.writeHead(200, { "content-type": "text/html" });
                res.write(new_array);


            })

            .on("end", () => {
                console.log("done");
                res.end();
            })

            .on("error", (err) => {
                console.log(err);
                res.writeHead(404, { "content-type": "text/html" });
                res.write("<h1>File not Found</h1>");
                res.end();
            })
    }


    else {
        res.writeHead(400, { "content-type": "text/html" });
        res.write("<h1>error 404 ! Page not Found</h1>");
    }
});

server.listen(8000, "127.0.0.1");


// done and dusted !


// we could have also fetched data by async await instead of that request module.

/*

const url = "https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=8e7c4c0021d5e94d2aab790ec8b5416c";


const getQuote = async() => {
    let data = await fetch(url);
    
    let newdata = await data.json();
    const arr = [newdata];
    arr will have our data.
}

getQuote();

*/