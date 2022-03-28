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
    },
    description:{
        type:String,
        required:true,
        default:'This is description regarding this book u can read ceratin detail about that'
    }
});

module.exports = mongoose.model('Book',bookSchema);























