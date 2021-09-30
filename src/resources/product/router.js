const productsRouter = require('express').Router()

const { getProductsByType } = require('./controller')

//GET PRODUCTS BY TYPE
productsRouter.get('/:type', getProductsByType)

module.exports = productsRouter
