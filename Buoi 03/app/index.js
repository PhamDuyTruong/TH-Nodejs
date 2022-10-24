const express = require("express");
const app = express();
const router = require("./router/root.router");

app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
    res.send("Hello world");
})

// http://localhost:8800/students
app.get("/students", (req, res) => {
    res.send(studentList)
});



const port = 8800;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Setup sequelize
const {sequelize} = require("./model");

sequelize.sync({alter: true});

