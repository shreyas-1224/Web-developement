const express = require("express");

const app = express();

app.get('/' , (req , res) => {
    
    const api = 'api.openweathermap.org/data/2.5/weather?q=Pune&appid=8e7c4c0021d5e94d2aab790ec8b5416c';
    try {
        const func = async() => {
            const data = await fetch(api);
            const data_obj = await data.json();
            const arr = [data_obj];
            console.log(arr);
        }

        func();
    } catch (error) {
        console.log(error);
    }

}); 

app.listen(8000);