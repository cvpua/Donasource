const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Image = require('./image');



mongoose.set('useCreateIndex', true);

const user = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username : {
        type: String, 
        required : true,
        unique : true
    },
    password : {type : String, required : true},
    name : {
        type: {type: String},
        firstName : {type: String, required : true},
        lastName : {type: String, required : true},
    },
    avatar : {type: mongoose.Schema.Types.ObjectId, ref: 'Image',default:null},
    email : {
        type: String, 
        required : true,
        unique : true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    location : String,
    contactNumber : {type : String, required : true},
    bio : {type : String, default : null},
    notifications : [{type: mongoose.Schema.Types.ObjectId, ref: 'Notification'}],
    avails : [{type: mongoose.Schema.Types.ObjectId, ref: 'Avail'}],
    donationGiven : {type : Number,default : 0},
    donationRequested : {type : Number,default : 0},
    postCount : {type : Number, default : 0},
    donationPostCount : {type : Number, default : 0},
    requestPostCount: {type : Number, default : 0},
    posts : [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    likedPostsCount : {type : Number, default : 0},
    likedPosts : [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    postsCommented : [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
})

module.exports = mongoose.model('User',user);

