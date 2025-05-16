const express = require('express');
const app = express();
const bodyParser = require(("body-parser"))
const connection = require("./database/database")

const categoriesController = require("./categories/CategoriesController")
const clientesController = require("./clientes/ClientesController")

const Clientes = require("./clientes/Clientes")
const Category = require("./categories/Category")
//View engine
app.set('view engine', 'ejs');

//Static
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded ({extend: false}));
app.use(bodyParser.json());

//Database
connection.authenticate()
  .then(() => {
    console.log('Conexão com PostgreSQL estabelecida com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao PostgreSQL:', error);
  });



app.use("/",categoriesController)
app.use("/",clientesController)  

app.get("/", (req,res) => {
  res.render("index");
})

app.listen(8080, () =>{
  console.log("O servidor está rodando")
})


//nodemon index.js
