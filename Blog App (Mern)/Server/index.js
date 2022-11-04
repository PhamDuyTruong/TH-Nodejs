import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from 'mongoose'
import posts from "./routers/post.js";

const URI = 'mongodb+srv://admin:16LbjjPFO2OubAEO@cluster0.gii8yfa.mongodb.net/?retryWrites=true&w=majority';

const app = express();
const PORT = process.env.PORT || 5000;

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

