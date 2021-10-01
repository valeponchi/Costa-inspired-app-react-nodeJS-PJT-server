const { Router } = require('express')

const { getAll, getOneById } = require('./controller')

const router = Router()

router.get('/', getAll)
router.get('/:id', getOneById)

module.exports = router
