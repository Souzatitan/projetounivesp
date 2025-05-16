const Sequelize = require("sequelize");

// Configuração da conexão com PostgreSQL
const connection = new Sequelize('meubanco', 'anderson', '123456', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432 // porta padrão do PostgreSQL
});




module.exports = connection;

