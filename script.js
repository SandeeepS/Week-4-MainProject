const express = require('express');
const app = express();
const path = require('path');
const bodyparser =require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

app.use(function(req, res, next) { 
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
   next();
 });
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','ejs');
app.use(express.static("views"));
const usernamedb = "sandeep";
const passworddb = "123";


// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));


//serving public file
app.use(express.static(__dirname));

// cookie parser middleware
app.use(cookieParser());

// a variable to save a session
var session;


//app.get("/",(req,res)=>{
//   res.render('index')
//})

app.get('/',(req,res) => {
  session=req.session;
  if(session.userid){
      
      res.render('home');
  }else

 res.render('index');
});


app.post('/home',(req,res)=>{
  const {username,password} = req.body;
  if(username === usernamedb && password === passworddb){
    session = req.session;
    session.userid=username;
    console.log(req.session);
    res.render('home');
  }else{
    res.render('index', { error: 'Incorrect username or password' });
  }
})

app.get('/logout',(req,res) => {
  req.session.destroy();
  res.redirect('/');
})


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });