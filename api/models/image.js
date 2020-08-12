const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const image = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    image : {
        imageName : {type: String},
        url : {type: String},
    }
})

module.exports = mongoose.model('Image',image);