const express = require('express');
const mongoose = require('mongoose');
const app = express();
const url = "mongodb://localhost/crudApi"
const PORT = 3000;
mongoose.connect(url,{useNewUrlParser:true});

const conn = mongoose.connection;
conn.on('open',function(){
    console.log("Connected to db");
});
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));

app.use(express.json());

const bookRoutes = require('./Routes/book');
app.use('/book',bookRoutes);

const userRoutes = require('./Routes/user');
app.use('/user',userRoutes);

