const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name:{ 
        type:String,
        required:true
    },
    price:{ 
        type:String,
        required:true
    },
    author:{ 
        type:String,
        required:true
    },
    publishedOn:{
        type:Date,
        default:Date.now()
    },
    quantity:{
        type:Number,
        default:0
    }
});

module.exports = mongoose.model('Book',bookSchema);























