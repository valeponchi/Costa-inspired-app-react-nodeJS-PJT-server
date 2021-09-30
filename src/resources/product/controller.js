const { product } = require('../../utils/database')

//GET PRODUCTS BY TYPE
async function getProductsByType(req, res) {
	const requestedType = req.params.type
	try {
		const itemsFound = await product.findMany({
			where: {
				type: {
					equals: requestedType,
					// mode: 'insensitive',
				},
				// select: {
				// 	diet: true,
				// },
			},
		})
		if (itemsFound) res.json(itemsFound)
		if (!itemsFound) res.json({ msg: 'Type not found' })
	} catch (error) {
		console.log(error)
		res.json(error => error.message)
		//res.json(error.message)
	}
}

module.exports = { getProductsByType }
