const express= require('express'); //import express
const myapp=express();

const cors=require('cors');

require('dotenv').config(); //dotenv config port
const port= process.env.PORT || 8900

myapp.get('/',(req,res)=>{ //create API first
    res.send("welcome to the express");
});

myapp.listen(port,()=>{
    console.log(`server is running at port no: ${port} `);
    
})