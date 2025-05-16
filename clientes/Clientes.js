const Sequelize = require("sequelize")
const connection = require("../database/database")

const Clientes = connection.define('clientes',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = Clientes;