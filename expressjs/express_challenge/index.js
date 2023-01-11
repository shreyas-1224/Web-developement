// task is to fetch the api and write its city name and the temperature. 

const express = require('express');
const app = express();
const request = require('requests');


app.get('/about?'  , (req , res) => {
    request(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=8e7c4c0021d5e94d2aab790ec8b5416c`)
    .on('data' , (chunk) => {
        const object = JSON.parse(chunk);
        const arr = [object];
        res.write(`${arr[0].name}`);
        res.write(`temp max is : ${arr[0].main.temp_max}\n`);
        res.write(`temp min is : ${arr[0].main.temp_min}\n`);
        res.write(`actual temperature is : ${arr[0].main.temp}`);

        res.end();
    });
});

app.listen(8000);