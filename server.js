const express = require('express');
let app = express();
const passport = require('passport');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const {mlab_URL} = require('./config')


app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  
// database connection
mongoose.Promise = global.Promise;
mongoose.connect(mlab_URL);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mlab connected: ')
});

app.use(morgan('combine'));
app.use(bodyParser.json());

app.use('/api', require('./routes'));
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Server is running on port: ", port)
});

module.exports = app;