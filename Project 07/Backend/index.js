const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routers/auth");
const userRoute = require("./routers/user");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`Server is running ${PORT}`);
    })
}).catch(err=> {
    console.log('Error: ', err)
});

// AUTHENTICATION
