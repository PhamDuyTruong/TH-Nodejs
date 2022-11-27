const express = require("express");
const path = require("path");
const exphbs = require('express-handlebars');
const productRoute = require("./Router/productRoute")
const bodyParser = require('body-parser')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const pathPublic = path.join(__dirname, "./public");
app.use(express.static(pathPublic));

app.engine('.hbs', exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use("/", productRoute);

const port = 3000
app.listen(port, () => {
   console.log(`Example at http://localhost:${port}`);
})
