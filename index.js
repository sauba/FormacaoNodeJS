const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/connectDatabase");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");


// VIEW ENGINE
app.set('view engine', 'ejs');

// STATIC
app.use(express.static('public'));

// BODY-PARSER
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DATABASE
connection
    .authenticate()
    .then(() => {
        console.log("Conexão estabelecida com Sucesso !");
    })
    .catch((error) => {
        console.log(error);
    })


app.use("/", categoriesController);
app.use("/", articlesController);

// ROTA PRINCIPAL (RAIZ)
app.get("/", (req, res) => {
    res.render("index"); // RENDERIZANDO A PAGINA INDEX.EJS
});

app.listen(1028, () => {
    console.log("O servidor Está em Execução");
});