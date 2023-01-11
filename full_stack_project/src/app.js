const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

staticPath = path.join(__dirname , "../public");     //absolute path
const folderPath = path.join(__dirname , "../");
// buiting middlewere. express.static(path of public folder);
app.set('view-engine' , 'hbs');

hbs.registerPartials(path.join(folderPath , '/templates/partials'));    //register partials.

app.use(express.static(staticPath));            // middlewere

app.get('/',(req,res) => {
    res.render(path.join(folderPath , "/templates/views/index.hbs"));
});

app.get('/weather',(req,res) => {
    res.render(path.join(folderPath , "/templates/views/temp.hbs"));
});

app.get('/about',(req,res) => {
    res.send('this is about page');
});

app.get('*',(req , res) => {
    res.send("error page");
});



app.listen(8000, () => {
    console.log("universe is helping you shreyas! you will get whatever you want");
});