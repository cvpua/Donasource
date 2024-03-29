const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const cron = require('node-cron');
const axios = require('axios');
const path = require('path');
const updates = require('./api/controllers/updates');


const postsApi = require('./api/routes/posts');
const usersApi = require('./api/routes/users');
const signupApi = require('./api/routes/signup');
const updateApi = require('./api/routes/updates');
const Post = require('./api/models/post');


// connect to db
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use(express.static(path.join(__dirname, 'build')));


// body-parser
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use('/',postsApi);
app.use('/',usersApi);
app.use('/',signupApi);
app.use('/',updateApi);

const task = cron.schedule('* * * * *', () => {
   updates.checkDeadlines();
})
task.start()

app.get('*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
});







const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
});