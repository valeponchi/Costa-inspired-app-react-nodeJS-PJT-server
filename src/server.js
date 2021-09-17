const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// ROUTERS
// const authRouter = require("./resources/auth/router");
// const loginAuth = require("./middleware/login");

// MIDDLEWARES
app.disable('x-powered-by')

app.use(cors({ origin: 'http://localhost:3000', credentials: true })) // Enables the OPTIONS request check in our API
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// Auth
// This is NOT under login protection
// app.use(authRouter);

// This is your gate keeper to make sure the user is logged in!
// Any route after this one will be protected by login!
// app.use(loginAuth);

// ROUTES

app.get('*', (req, res) => {
	res.status(404).json({ msg: 'No route is matching your request..' })
})

//CONNECT THE SERVER
const port = process.env.PORT || 4000

app.listen(port, () => {
	console.log(`The server is connected @ http://localhost:${port} ☕`)
})
