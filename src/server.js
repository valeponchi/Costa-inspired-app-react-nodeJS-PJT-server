require('dotenv').config()
const express = require('express')
// const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// ROUTERS
const authRouter = require('./resources/auth/router')
const userRouter = require('./resources/user/router')
const { protect, adminRoute } = require('./resources/auth/controller')

const productsRouter = require('./resources/product/router')

// MIDDLEWARES
app.disable('x-powered-by')

app.use(cors({ origin: 'http://localhost:3000', credentials: true })) // Enables the OPTIONS request check in our API
// app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// ROUTES
app.use('/products', productsRouter)
// Auth
// This is NOT under login protection
app.use('/', authRouter)

/* For regular users only */
app.use('/users', protect, userRouter)
/* For admin users only */
// app.use('/users', protect, adminRoute, userRouter)

app.get('*', (req, res) => {
	res.status(404).json({ msg: 'No route is matching your request..' })
})

//CONNECT THE SERVER
const port = process.env.PORT || 4000

app.listen(port, () => {
	console.log(`The server is connected @ http://localhost:${port} ☕`)
})
