const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET

const createToken = user => {
	// you can be very specific on what to send over
	// return jwt.sign({ id: user.id, role: user.role }, jwtSecret, { expiresIn: '1h' })
	return jwt.sign({ ...user }, jwtSecret, { expiresIn: '1h' })
}

const verifyToken = token => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, jwtSecret, (error, payload) => {
			if (error) reject(error)

			resolve(payload)
		})
	})
}

module.exports = {
	createToken,
	verifyToken,
}
