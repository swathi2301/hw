var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get('/', function(request, response) {
  response.send({
"speech": "Barack Hussein Obama II was the 44th and current President of the United States.",
"displayText": "Barack Hussein Obama II was the 44th and current President of the United States, and the first African American to hold the office. Born in Honolulu, Hawaii, Obama is a graduate of Columbia University   and Harvard Law School, where ",
"data": {},
"contextOut": [],
"source": "DuckDuckGo"
});
});


app.post('/', function(request, response) {
 var provider = request.body.result.parameters.provider;
 console.log('Provider: ' + provider);
 var displayText = "Provider " + provider + " has a problem. We are looking into it.";
  response.send({
"speech": "Barack Hussein Obama II was the 44th and current President of the United States.",
"displayText": displayText,
"data": {},
"contextOut": [],
"source": "DuckDuckGo"
});
});



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
