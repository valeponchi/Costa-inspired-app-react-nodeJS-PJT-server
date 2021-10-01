const prisma = require('../../utils/database')
const { createToken, verifyToken } = require('../../utils/authentication')
const bcrypt = require('bcrypt')

const User = prisma.user

const signup = async (req, res) => {
	const userToCreate = {
		...req.body,
	}

	if (!userToCreate.email || !userToCreate.password) {
		res.status(400).json({ error: 'Missing email or password.' })
	}

	try {
		const securePassword = await bcrypt.hash(userToCreate.password, 8)

		userToCreate.password = securePassword

		console.log(`inside signup backend:`, { securePassword })

		const user = await User.create({
			data: {
				...userToCreate,
			},
			select: {
				id: true,
				role: true,
			},
		})

		const token = createToken(user)

		res.status(201).json({ token })
	} catch (error) {
		console.error('[ERROR] /signup route: ', error)

		if (error.code === 'P2002') {
			res.status(501).json({
				error: {
					...error,
					message: 'User already exists.',
				},
			})
		} else {
			res.status(500).json({ error })
		}
	}
}

const login = async (req, res) => {
	const userCredentials = {
		...req.body,
	}

	if (!userCredentials.email || !userCredentials.password) {
		res.status(400).json({ error: 'Missing email or password.' })
	}

	try {
		const user = await User.findUnique({
			where: {
				email: userCredentials.email,
			},
			select: {
				id: true,
				role: true,
				password: true,
			},
		})

		if (!user) {
			res.status(401).json({ error: 'Authentication failed.' })
			console.error('Authentication failed')
		}

		console.log('Inside signin, passwords: ', {
			fromRes: userCredentials.password,
			fromDb: user.password,
		})

		const match = await bcrypt.compare(userCredentials.password, user.password)

		if (match) {
			const userToTokenize = {
				...user,
			}

			delete userToTokenize.password

			const token = createToken(userToTokenize)

			res.status(201).json({ token })
		} else {
			res.status(401).json({ error: 'Authentication failed.' })
			console.error('Authentication failed')
		}
	} catch (error) {
		res.status(500).json({ error })
	}
}

const protect = async (req, res, next) => {
	const bearer = req.headers.authorization

	if (!bearer || !bearer.startsWith('Bearer ')) {
		return res.status(401).end()
	}

	const token = bearer.split('Bearer ')[1].trim()

	let payload = null

	try {
		payload = await verifyToken(token)
	} catch (error) {
		console.error({ error })
		return res.status(401).end()
	}

	console.log('Inside protect: ', { bearer, payload })

	const user = await User.findUnique({
		where: {
			id: payload.id,
		},
		select: {
			id: true,
			role: true,
		},
	})

	if (!user) {
		return res.status(401).end()
	}
	req.user = user
	console.log('user passing from protect', user)
	next()
}

const adminRoute = async (req, res, next) => {
	if (!req.user || req.user.role !== 'ADMIN') {
		res.status(401).end()
	} else {
		next()
	}
}

module.exports = {
	signup,
	login,
	protect,
	adminRoute,
}
