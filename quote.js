const request = require('request');
var category = 'happiness';

var quote = "shreyas";

async function Channel(){
request.get({
  url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
  headers: {
    'X-Api-Key': 'cEvwNJJTpp2JhvJ1IdI5gQ==vH922M2p6nAXKGA7'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else return body;
});
}

Channel().then((x)=>{
    quote = x;
    console.log(x);
});