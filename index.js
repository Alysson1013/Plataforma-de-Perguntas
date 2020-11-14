//importando modulo
const express = require("express");
const app = express();

app.use(express.static('public'))

//Configurando EJS no Express
//Passando para o express que o motor usado - view engine - é o ejs
app.set('view engine', 'ejs');

//rota de teste
app.get('/', (req, res) => {
    res.render("index")
})

app.get('/perguntar', (req, res) => res.render('perguntar'))

//Rodando Servidor
app.listen(8080, ()=> console.log("App rodando!!!"))