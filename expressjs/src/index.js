// partials in expressjs
// create paritals folder and register with hbs. 
// inside partials , create the files with useful codes.(repeating one).
// variable is similar as template engine expect  , {{>filename}};


const express = require('express');
const app = express();
const hbs = require('hbs');             // aquire hbs.
const path = require('path');


absPath = path.join(__dirname , '../templates');         // abs path to templates folder



app.set('view engine' , 'hbs');
hbs.registerPartials(path.join(absPath , '/partials'));    //register partials.

app.get('/' , (req , res) => {
    res.render(path.join(absPath , '/views/index.hbs') , {
        Disabled : "shreyas"
    });
});

app.get('/contact' , (req , res) => {
    res.render(path.join(absPath , '/views/index.hbs') , {});
    //res.render(path.join(absPath , '/views/contact.hbs'));
});

app.listen(8000);

/* in nutshell , first create partials and in that partials , create files with reusable code.
then in view , use this partials as , {{>filename in partials}} .

register the partial folder first with hbs. also register template engine.

use it . to run hbs , js file on nodemon use , nodemon index.js -e js , hbs

*/