const express= require('express'); //import express
const myapp=express();

const myroute= require('./routers/routes');

const cors=require('cors');

require('dotenv').config(); //dotenv config port
const port= process.env.PORT || 8900

myapp.use(express.json());
myapp.use(myroute);
myapp.use(cors);


myapp.listen(port,()=>{
    console.log(`server is running at port no: ${port} `);
    
})