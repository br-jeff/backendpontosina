const Sequilize = require ('sequelize')
const dbConfig = require('../config/database')

const connection = new Sequiilize(dbConfig);

module.exports = connection;