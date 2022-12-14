import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from 'mongoose'
import posts from "./routers/post.js";
import dotenv from "dotenv";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.DB_URI;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb'}));
app.use(cors());

app.use("/posts", posts);

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`Server is running ${PORT}`);
    })
}).catch(err=> {
    console.log('Error: ', err)
});

