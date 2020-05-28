 //___________________
 //Dependencies
 //___________________
 const express = require('express');
 const methodOverride  = require('method-override');
 const mongoose = require ('mongoose');
 const app = express ();
 const db = mongoose.connection;
 const PORT = process.env.PORT || 3000;
 const session = require('express-session');
 const videosController = require('./controllers/videos.js');
 const usersController = require('./controllers/users_controller.js');
 const sesssionsController = require('./controllers/sessions_controller.js');
 const SECRET = process.env.SECRET || 'helloWorld';

 const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';
 mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
 
 // Error / success
 db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
 db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
 db.on('disconnected', () => console.log('mongo disconnected'));
 
 db.on('open' , ()=>{});
 
 //___________________
 //Middleware
 //___________________

 app.use(express.static('public'));
 app.use(express.urlencoded({ extended: false }));
 app.use(express.json());
 app.use(methodOverride('_method'));
 app.use(session({
   secret: SECRET,
   resave: false,
   saveUninitialized: false
 }))
 app.set ('view engine', 'jsx');
 app.engine('jsx', require('express-react-views').createEngine());
 

 //___________________
 // Controllers
 //___________________
 app.get('/' , (req, res) => {
   res.send('<a href="/videos">Enter Videos Collection</a>');
 });
 
app.use('/videos', videosController);
app.use('/sessions', sesssionsController);
app.use('/users', usersController);


 //___________________
 //Listener
 //___________________
 if (process.env.PORT){
     app.listen(PORT);
 } else {
     app.listen(PORT,'localhost', () => console.log( 'Listening on port:', PORT));}