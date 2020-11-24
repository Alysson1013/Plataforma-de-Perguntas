//Chamando Sequelize
const Sequelize = require('sequelize')

//Fazendo conexão
const connection = new Sequelize('guiaperguntas', 'root', '33031516', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;