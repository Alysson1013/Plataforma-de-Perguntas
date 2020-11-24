//Model de Pergunta

//importando Sequelize 
const Sequelize = require('sequelize')
const connection = require('./database')

//Definição de Tabelas
const Pergunta = connection.define('pergunta', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    },
});

//Sincroniza com banco de dados, caso não exista cria, force: false não cria a tabela.
Pergunta.sync({
    force: false
}).then(() => console.log('Tabela Criada'))

module.exports = Pergunta