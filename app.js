// 265 (***模板***)
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.get('/', function(req, res) {
//     res.send('hello');
// });

// app.listen(3000, function(){
//     console.log('server started on port 3000');
// });

// npm init
// npm i express body-parser
// nodemon app.js



// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.get('/', function(req, res) {

//    var today = new Date();
//    var currentDay = today.getDay();

//    if (today.getDay() === 6 || today.getDay() === 0) {
//     res.send("<h1>Yay it's the weekend!</h1>");
//    } else {
//     res.sendFile(__dirname + '/index.html');
//    }

// });

// app.listen(3000, function(){
//     console.log('server started on port 3000');
// });

// nodemon app.js



// 266
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.set('view engine', 'ejs');
// app.get('/', function(req, res) {

//    var today = new Date();
//    var currentDay = today.getDay();
//    var day ='';

//    switch (currentDay) {
//         case 0:
//         day = 'Sunday';
//         break;
//         case 1:
//         day = 'Monday';
//         break;
//         case 2:
//         day = 'Tuesday';
//         break;
//         case 3:
//         day = 'Wednesday';
//         break;
//         case 4:
//         day = 'Thursday';
//         break;
//         case 54:
//         day = 'Friday';
//         break;
//         case 6:
//         day = 'Saturday';
//         break;
//     default:
//         console.log('Error: current day is equal to: ' + currentDay);
//    }

//    res.render('list', {
//     kindOfDay: day
//     });

// });

// app.listen(3000, function(){
//     console.log('server started on port 3000');
// });

// npm i ejs
// create File 'view'
// creater 'list.ejs'



// 268
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// var items = ['Buy Food', 'Cook Food', 'Eat Food'];

// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}));
// app.get('/', function(req, res) {

//    var today = new Date();
   
//    var options = {
//     weekday: 'long',
//     day: 'numeric',
//     month: 'long',
//    };

//    var day = today.toLocaleDateString('en-US', options);

//    res.render('list', {kindOfDay: day, newListItems: items});

// });

// app.post('/', function(req, res){
//     var item = req.body.newItem;

//     items.push(item);
    
//     res.redirect('/');

// });

// app.listen(3000, function(){
//     console.log('server started on port 3000');
// });

// nodemon app.js



// 269
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// let items = ['Buy Food', 'Cook Food', 'Eat Food'];

// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}));
// app.get('/', function(req, res) {

//     let today = new Date();
   
//     let options = {
//     weekday: 'long',
//     day: 'numeric',
//     month: 'long',
//    };

//    let day = today.toLocaleDateString('en-US', options);

//    res.render('list', {kindOfDay: day, newListItems: items});

// });

// app.post('/', function(req, res){
//     let item = req.body.newItem;

//     items.push(item);
    
//     res.redirect('/');

// });

// app.listen(3000, function(){
//     console.log('server started on port 3000');
// });

// nodemon app.js



// 270
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// let items = ['Buy Food', 'Cook Food', 'Eat Food'];

// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('public'));
// app.get('/', function(req, res) {

//     let today = new Date();
   
//     let options = {
//     weekday: 'long',
//     day: 'numeric',
//     month: 'long',
//    };

//    let day = today.toLocaleDateString('en-US', options);

//    res.render('list', {kindOfDay: day, newListItems: items});

// });

// app.post('/', function(req, res){
//     let item = req.body.newItem;

//     items.push(item);
    
//     res.redirect('/');

// });

// app.listen(3000, function(){
//     console.log('server started on port 3000');
// });

// nodemon app.js



// 271
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// let items = ['Buy Food', 'Cook Food', 'Eat Food'];
// let workItems = [];

// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('public'));
// app.get('/', function(req, res) {

//     let today = new Date();
   
//     let options = {
//     weekday: 'long',
//     day: 'numeric',
//     month: 'long',
//    };

//    let day = today.toLocaleDateString('en-US', options);

//    res.render('list', {listTitle: day, newListItems: items});

// });

// app.post('/', function(req, res){

//     let item = req.body.newItem;

//     if (req.body.list === 'Work') {
//         workItems.push(item);
//         res.redirect('/work');
//     } else {
//         items.push(item);
//         res.redirect('/');
//     }

// });

// app.get('/work', function(req, res){
//     res.render('list', {listTitle: 'Work List', newListItems: workItems});
// });

// app.get('/about', function(req, res){
//     res.render('about');
// })

// app.listen(3000, function(){
//     console.log('server started on port 3000');
// });

// nodemon app.js



// 272
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();
const items = ['Buy Food', 'Cook Food', 'Eat Food'];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.get('/', function(req, res) {

    const day = date.getDate();
    
    res.render('list', {listTitle: day, newListItems: items});

});

app.post('/', function(req, res){

    const item = req.body.newItem;

    if (req.body.list === 'Work') {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }

});

app.get('/work', function(req, res){
    res.render('list', {listTitle: 'Work List', newListItems: workItems});
});

app.get('/about', function(req, res){
    res.render('about');
});

app.listen(3000, function(){
    console.log('server started on port 3000');
});

// nodemon app.js
// node app.js