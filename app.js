const express = require('express');
const app = express();
const mongoose = require('mongoose');
const taskRouter = require('./router/taskRouter');
const cors = require('cors');

// CONFIGURATIONS 
require("dotenv").config();

// CORS MIDDLEWARE
app.use(cors());

// MIDDLEWARE(FOR JSON USAGE)
app.use(express.json());

// ENVIRONMENTAL VARIABLES
const db_url = process.env.DBURL;
const port = process.env.PORT || 6060;

// MONGO-DB CONNECTION
const connect = ()=>{
    mongoose.connect(db_url);
    try{
        console.log('DB Connection Established');
    } catch(err){
        console.log({err: err});
    }
}

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

// ROUTES
app.use('/tasks', taskRouter)

app.listen(port, ()=>{
    console.log(`App launched on port ${port}`);
    connect()
})