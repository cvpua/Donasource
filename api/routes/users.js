const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../auth/check-auth');

// get all user
router.get('/api/users',UserController.getAllUsers)


// get one user
router.get('/api/users/:username',UserController.getUser)



// get all post liked by a user
router.get('/api/users/:userId/likedPosts',UserController.getLikedPosts)


// get all the notifs of a user
router.get('/api/users/:userId/notifications',UserController.getAllNotifications)


// Change the seen value from false to true
router.get('/api/users/:userId/notifications/:notifId',UserController.seeNotification)


// {field/s : updatedValue}
router.patch('/api/users/:userId/editUser',checkAuth,UserController.editUser)


//oldPassword
//newPassword
//newPasswordCopy
router.patch('/api/users/:userId/changePassword',checkAuth,UserController.changePassword)

router.get('/api/users/:userId/avails',UserController.getAvails)

//respond to request
router.patch('/api/users/:userId/avails/:availId',checkAuth,UserController.respondToAvails);

module.exports = router;