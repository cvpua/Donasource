const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const multer = require('multer');
const fs = require('fs-extra');
const bcrypt = require('bcrypt');

const Image = require('../models/image');
const User = require('../models/user');
const Notification = require('../models/notification');
const Post = require('../models/post');
const { response } = require("express");
const notification = require("../models/notification");
const Avail = require("../models/avail");
const Donee = require("../models/donee");


const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './profilePictures'); 
    },
    filename : function(req,file,cb){
        cb(null, new Date().toISOString() + file.originalname);
    }
});

// File type checker
const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
        cb(null,true);
    }else{
        cb(new Error("Wrong file format"),false);
    }
}

const upload = multer({
    storage, 
    limits: {
        fileSize: 1024 * 1024 * 1
    },
    fileFilter

}).single('avatar');




exports.getAllUsers = (req,res) => {
    User.find()
    .exec()
    .then((users) =>{
        res.status(200).json(users)
    })
}

exports.getUser = (req,res) =>{
    User.findOne({username : req.params.username})
    .populate({
        path: 'posts',
        populate: {
            path: 'user',
            select: 'username avatar name'
        }})
    .populate({
        path: 'posts',
        populate: {
            path: 'items',
            populate : {
                path :' donor',
                populate : {
                    path: 'user',
                    select : 'name username avatar'
                }
            }
        }
    })
    .populate({
        path: 'posts',
        populate: {
            path: 'images'
        }})
    .exec()
    .then( user => {
        if (!user){
            return res.status(401).json({
                message : "Username/password does not exist"
            })
        }else{

            user.posts.sort((a,b) => {
                let dateA = new Date(a.datePosted);
                let dateB = new Date(b.datePosted);
                return dateB - dateA;
            });

            return res.status(200).json({
                user
            })
        }
    })
    .catch(error => {
        res.status(400).json({
            message : "User not found",
            error : error.response
        })
    })
}


exports.getLikedPosts = (req,res) => {

    User.findOne({_id : req.params.userId})
    .populate("likedPosts")
    .exec()
    .then(user => {
        res.status(200).json(user.likedPosts)
    })
    .catch(err => {
        res.status(400).json({message: "User not found",err})
    })
    
}

exports.getAllNotifications = (req,res) => {

    User.findById(req.params.userId)
    .populate({path: 'notifications',
    populate : {
        path: 'user',
        select : 'name avatar'
    }
    })
    .exec()
    .then(user => {
        res.status(200).json(
            {
                notificationCount : user.notifications.length,
                notifications : user.notifications
            }
        )
    })
    .catch(err => {
        console.log(err)
    })
}

exports.seeNotification = (req,res) => {
    
    Notification.findById(req.params.notifId)
    .exec()
    .then( notification => {
        notification.seen = true;
        notification.save()
        .then(response => {
            res.json({message : "Notif seen"})
        })
    })
    .catch()
}

exports.editUser = async(req,res) => {
    const toUpdate = {}
    for(const property of Object.entries(req.body)){
        if( toUpdate[property[0]] === "name"){
            toUpdate[property[0]] = JSON.parse(property[1])
        }else{
        toUpdate[property[0]] = property[1];
        }
    }    

    if(req.files && req.files.length > 0){
        const image = new Image ({
            _id : mongoose.Types.ObjectId(),
            imageName : req.files[0].filename,
            imagePath : req.files[0].filepath,
        })
        toUpdate[avatar] = image;

        try{
            const path = image.imagePath;
            const uploadedResponse = await cloudinary.uploader.upload(path);
            image.url = uploadedResponse.url;
            image.publicId = uploadedResponse.public_id;
            image.save()
            .then(console.log("Image saved!"))
        } catch(err){
                console.log(err)
        } 
    }

    User.updateOne({_id : req.params.userId},{$set : toUpdate})
    .exec()
    .then(response => {
        User.findById(req.params.userId)
        .exec()
        .then(user => { 
            res.json({message : "User updated!", user});
        })
    })
    .catch(err => {
        res.json({message: "User not updated", err})
    })
}

exports.changePassword = (req,res) => {
    User.findById(req.params.userId)
    .exec()
    .then(user => {

        if(req.body.newPassword !== req.body.newPasswordCopy){
            res.status(400).json({message : "New password doesn't match"})
        }

        else{
            bcrypt.compare(req.body.oldPassword,user.password, (err,result)=> {

                if (!result || err){   
                    
                    return res.status(401).json({
                        message: "Incorrect password",err
                    });
                }
                if(result){
                    bcrypt.genSalt(10,(err,salt) => {
                        bcrypt.hash(req.body.newPassword,salt,(err,hash) => {
                            if(err){
                                res.status(500).json({err});
                                return;
                            }else{
                                
                                user.password = hash;
                                user.save()
                                .then( user => {
                                    if (user){
                                        res.status(200).json({
                                            message : "Password updated!"
                                        })
                                    }
                                })
                                .catch(error =>{
                                    // const message = error.keyValue ? "Username is already used" : "Invalid email format"
                                        res.status(401).json({
                                            error
                                        })
                                })
                            }


                        })
                    })

                }
            })
        }
    })
    .catch(err =>{
        console.log(err)
    })
}

exports.getAvails = (req,res) => {
    User.findById(req.params.userId)
    .populate('avails')
    .select('avatar name username avails')
    .exec()
    .then(user => {
        res.json(user)
    })
    .catch(error => {
        console.log(err)
    })
}

exports.respondToAvails = (req,res) => {
    
    if(req.body.response === "ACCEPT"){
        Avail.findById(req.params.availId)
        .populate({path: 'post',
            populate : { path : 'items',
            }
        })
        .populate({path: 'user'})
        .exec()
        .then(avail => {
            
            avail.items.map(item => {
                const donee = new Donee({
                    _id : mongoose.Types.ObjectId(),
                    user : avail.user,
                    reason : avail.reason,
                    amountRequested : item.amountRequested
                })
            })
        })
    }
}