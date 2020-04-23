const express = require('express')

const routes = express.Router()

routes.get('/', (req,res) => {
    res.json({mensssagem : "app só pra 3 BR"} )
})

module.exports = routes;