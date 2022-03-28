
const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.get('/',async(req,res)=>{
    try{
        //throw 'Invalid request aman';
        const user = await User.find();
        res.json(user);
    }catch(error){
        res.json(error);
    }
});
module.exports = router;