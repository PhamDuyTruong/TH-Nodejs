const express = require("express");
const path = require("path");
const {sequelize}= require('./models');

const {rootRouter, userRouter} = require("./routers");



const app = express();

app.use(express.json());

const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));

app.use('/api/v1', rootRouter);
app.use('/api/v1', userRouter);

app.listen(8080, async () => {
    console.log(`App running at localhost at ${8080}`);
    try{
       await sequelize.authenticate();
       console.log('Connection successfully !!!!');
    }catch(error){
        console.log('Unable to connect')
    }
    
    
})