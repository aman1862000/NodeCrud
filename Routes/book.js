const express = require('express');
const router = express.Router();
const Book = require('../model/book');

// Get all books
router.get('/',async (req,res)=>{
    try{
        const books = await Book.find();
        res.json(books);
    }
    catch(error){
        res.json(error);
    }    

}) 

// get book by id
router.get('/:id',async (req,res)=>{
    try{
        const book = await Book.findById(req.params.id);
        console.log(book);
        res.json(book);
    }
    catch(error){
        res.json(error);
    }
})

// Add new book details
router.post('/',async (req,res)=>{
    const book = new Book({
        name : req.body.name,
        author : req.body.author,
        price : req.body.price
    })

    const data = await book.save(); 
    res.json(data);
})

// Update book detail by id
router.put('/:id',async (req,res)=>{
    const book = await Book.findById(req.params.id);
    book.name = req.body.name;
    book.price = req.body.price;
    book.author = req.body.author;
    const updatedBook = await book.save();
    res.json(updatedBook);
})

// Update book detail by id
router.patch('/:id',async (req,res)=>{
    const book = await Book.findById(req.params.id);
    book.name = req.body.name;
    book.price = req.body.price;
    book.author = req.body.author;
    const updatedBook = await book.save();
    res.json(updatedBook);
})

// Delete book by id
router.delete('/:id',async (req,res)=>{
    var book = await Book.deleteOne({_id:req.params.id});
    res.json(book);
});



module.exports = router;