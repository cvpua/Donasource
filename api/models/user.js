const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RequestPost = require('./requestPost');


mongoose.set('useCreateIndex', true);

const user = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username : {
        type: String, 
        required : true,
        unique : true
    },
    password : {type : String, required : true},
    firstName : {type : String, required : true},
    lastName : {type : String, required : true},
    email : {
        type: String, 
        required : true,
        unique : true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password : {type : String, required : true},
    contactNumber : {type : String, required : true},
    description : {type : String, required : true},
    requestCount : {type : Number, default : 0},
    requestPosts : [RequestPost.schema]
})

module.exports = mongoose.model('User',user);