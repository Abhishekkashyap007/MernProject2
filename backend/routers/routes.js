const express= require('express');
const myapp= express.Router();

myapp.get('/',(req,res)=>{ //create API first
    res.send("welcome to the express");
});
myapp.get('/about',(req,res)=>{ //create API first
    res.send("welcome to the express about");
});

myapp.get('/contact',(req,res)=>{
    res.send("this is external route path");
})

module.exports=myapp;