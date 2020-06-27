const express = require('express');
const router = express.Router();
const ITEM = require('../models/item');

router.route('/')
.get((req,res,next)=>{
    ITEM.find()
.then((itemfood)=>{
    res.json(itemfood);
}).catch((err) =>{console.log(err)});
})
.post((req,res,next)=>{
    ITEM.create(req.body)
    .then((itemfood)=>{
        res.json(itemfood);
    }).catch(next);
})
.put((req,res)=>{
    res.send("Not Supported"); 
})
 
.delete((req,res,next)=>{
    ITEM.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);
 
});
 
module.exports = router;