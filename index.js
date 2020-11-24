//importando modulo
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const connection = require('./database/database')
//importando Model
const perguntaModel = require('./database/Pergunta');
const Pergunta = require("./database/Pergunta");

connection
    .authenticate()
    .then(()=>{
        console.log('Conexão Realizada')
    })
    .catch((err)=>{
        console.log(err)
    })

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Configurando EJS no Express
//Passando para o express que o motor usado - view engine - é o ejs
app.set('view engine', 'ejs');

//rota de teste
app.get('/', (req, res) => {
    //Seleciona todos os dados do banco de dados
    Pergunta.findAll({ 
        raw: true, //Filtra um pouco os resultados
        //ordenando dados
        order: [['id', 'DESC']] //Desc significa que a exibição é decrescente e Asc é em ordem crescente
    }).then(perguntas => {
        console.log(perguntas)
        res.render("index",{
            //joga esse objeto para o front
            perguntas: perguntas
        })
    })
})

app.get('/perguntar', (req, res) => res.render('perguntar'))

//Rota para enviar dados para o Node
app.post('/salvarpergunta', (req, res) => {
    //variaveis recebem os valores do front-end
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=> res.redirect('/'))
})

//Rodando Servidor
app.listen(8080, ()=> console.log("App rodando!!!"))