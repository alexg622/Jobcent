const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const db = require('./config/keys').mongoURI
const path = require('path')
const app = express()
const cors = require('cors');
const users = require('./routes/api/users');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect(db).then(() => console.log("mongoDB is connected")).catch(err => console.log(err))
app.use(express.static('client/public'));
app.use(passport.initialize())
 require('./config/passport.js')(passport);

app.get('/test', (req, res) => res.send("working"));

app.use('/api/users', users);


if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
