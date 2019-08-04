const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const request = require('request');



//GENERAL CONFIGS
app.set('port', process.env.PORT || 3000);
//MIDDLEWARE
app.use(morgan('dev')); //View calls on dev
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, x-access-token, Content-Type, Accept");
    next();
});
//INIT SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

/*-------------------CALLS / ROUTES------------------*/
///FIRST DB TEST
/*PARAMS:
    WHITOUT PARAMS
*/
app.get('/api/verificarDisponibilidadTest', (req, res) => {
    request.head('http://google.com', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('statusMessage:', response && response.statusMessage);
        //console.log('body:', body); // Print the HTML for the Google homepage.
        let Resp = {
            headers: "",
            statusCode: 0,
            statusMessage: ""
        }
        Resp.headers = response.headers;
        Resp.statusCode = response.statusCode;
        Resp.statusMessage = response.statusMessage;

        res.send(Resp);
        return Resp;
    });
});
app.post('/api/verificarDisponibilidad', (req, res) => {
    request.head(req.body.url, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('statusMessage:', response && response.statusMessage);
        //console.log('body:', body); // Print the HTML for the Google homepage.
        let Resp = {
            headers: "",
            statusCode: 0,
            statusMessage: ""
        }
        Resp.headers = response.headers;
        Resp.statusCode = response.statusCode;
        Resp.statusMessage = response.statusMessage;

        res.send(Resp);
        return Resp;
    });
});
app.head('/api/testHead', (req, res) => {
    let Resp = {
        headers: "",
        statusCode: 0,
        statusMessage: ""
    }
    res.send(Resp);
    return Resp;
});


//ROOT ANGULAR APLICATION
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname));
});
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/angular-http-head/index.html');
});
app.use('/', express.static(__dirname + '/angular-http-head'));
//END ROOT ANGULAR APLICATION
/*-------------------CALLS / ROUTES------------------*/