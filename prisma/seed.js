const { PrismaClient } = require('@prisma/client')

const dbClient = new PrismaClient()

const users = [
	{
		email: 'tom@tom.com',
		password: 'tom123',
		role: 'user',
	},
	{
		email: 'david@david.com',
		password: 'david123',
		role: 'user',
	},
	{
		email: 'sara@sara.com',
		password: 'sara123',
		role: 'admin',
	},
]

const diets = [
	{
		name: 'vegetarian',
	},
	{
		name: 'vegan',
	},
	{
		name: 'glutenFree',
	},
	{
		name: 'dairyFree',
	},
	{
		name: 'nutFree',
	},
	{
		name: 'soyaFree',
	},
]

const products = [
	{
		type: 'coffee',
		name: 'espresso',
		description:
			'The Espresso is where it all begins. Its rich aroma is the heartbeat of all our coffees. We craft one simple shot of our intense roast for the most elegant of drinks.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/f/3/f/7/f3f7a6ec94bf5cf0e33abe514868baf9f8b5e416_cortado_thumb.jpg',
		price: 1.45,
	},
	{
		type: 'coffee',
		name: 'cappuccino',
		description:
			'A special treat made out of intense Espresso, frothy milk and decadent chocolate dusting. Enjoy it hot or ice cold.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/6/7/2/0/6720302656ef87ab8934f72e3c4348d8ede7c36c_spiced_cappuccino_thumb.jpg',
		price: 2.65,
	},
	{
		type: 'coffee',
		name: 'latte',
		description:
			'The perfect combination of our aromatic Espresso and creamy milk. This duo is ideal for everyone who loves their drink hot in winter and cold in summer.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/4/4/2/f/442f30d07de52a00aefb8990ce8982b9874bd238_Latte_Thumb.jpg',
		price: 2.15,
	},
	{
		type: 'frostino',
		name: 'Mint Choc Chip Frostino & Cream',
		description:
			'A refreshing indulgent treat, combining mint and chocolate in a Frostino, topped with cream and finished with a drizzle of chocolate sauce.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/6/a/6/6/6a66b76e983028e48fa7364d93cdbf7105387f1c_mint_choc_chip_frostino_with_cream_thumb.jpg',
		price: 2.65,
	},
	{
		type: 'frostino',
		name: 'Salted Caramel & Cream Frostino',
		description:
			'A sweet, fluffy drink with rich salted caramel, finished with whipped cream and a crunchy topping. Can be made with or without coffee.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/8/0/3/b/803b0a715b62363f2ba8e486f7e7984c24427c7e_salted_caramel_crunch_frostino_with_cream_thumb.jpg',
		price: 2.65,
	},
	{
		type: 'frostino',
		name: 'Strawberry & Cream Frostino',
		description:
			'An indulgent blended ice drink, made from strawberry sauce, milk and ice and finished with fresh cream.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/d/c/7/2/dc728e18733b915c2601e85faeba895a95432163_Strawberries___Cream_Frostino_With_Cream_Thumb.jpg',
		price: 2.65,
	},
	{
		type: 'food',
		name: 'Brown Toast',
		description:
			'Two slices of toasted malted bloomer bread packed with sunflower seeds, linseeds and oats. Offered with butter and marmalade.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/c/1/7/7/c177801bf092440c84dcc739edcae80f6b2ccfe5_toast_brown_thumb.jpg',
		price: 2.65,
	},
	{
		type: 'food',
		name: 'White Toast',
		description:
			'Two slices of white bloomer bread, toasted to perfection. Offered with butter and marmalade.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/c/9/4/d/c94d934e85e86c1c1ec4f5454f1c17fc64c09c16_toast_white_thumb.jpg',
		price: 2.65,
	},
	{
		type: 'food',
		name: 'Fruited Teacake',
		description:
			'A sweet dough with an abundance of sultanas and raisins. Offered with butter.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/0/0/0/3/0003f3d9624763cb3666fc68bde84fcaf1a8b45c_fruited_teacake_thumb.jpg',
		price: 2.65,
	},
	{
		type: 'pastries',
		name: 'Chocolate Twist',
		description: 'All butter pastry twist with dark chocolate.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/1/5/1/3/15136d0f218b7a64efe460d0dd6353e6af5b19f2_chocolate_twist_thumb.png',
		price: 1.5,
	},
	{
		type: 'pastries',
		name: 'Caramel Pecan Danish',
		description:
			'Danish Pastry with a caramel creme filling and pecan pieces on top.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/d/2/7/7/d27739f0ff720de3ed3914dc7a3150eb66249fc3_pecan_danish_thumb.jpg',
		price: 1.5,
	},
	{
		type: 'pastries',
		name: 'Pain aux Raisins',
		description: 'All butter pastry swirled with raisins.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/7/c/d/7/7cd7714ff33f674ae36702d2b20fa71c00d088d2_Improved_Pain_Aux_Raisin_Thumb.jpg',
		price: 1.5,
	},
	{
		type: 'food',
		name: 'Ham and Cheese Toastie',
		description: 'All butter pastry twist with dark chocolate.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/b/1/e/1/b1e1fa8dc4902634091364d713b6c8d77f246c8b_ham_cheese_toastie_marked_thumb.png',
		price: 2.3,
	},
	{
		type: 'food',
		name: 'Tuna Melt Panini',
		description:
			'Danish Pastry with a caramel creme filling and pecan pieces on top.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/f/f/2/2/ff224aeb737aaedb0a1ba755d577717029b32637_tuna_melt_panini_thumb.jpg',
		price: 2.8,
	},
	{
		type: 'food',
		name: `Vegan Bac'n Bap`,
		description: 'All butter pastry swirled with raisins.',
		imageUrl:
			'https://www.costa.co.uk/static/pim/f/8/e/b/f8eb3875a47024a44fcea70c27e58725b1f99bb3_vegan_bac_n_thumb__1_.png',
		price: 2.3,
	},
]

const dietsOnProduct = [
	{
		productId: 1,
		dietId: 1,
	},
	{
		productId: 1,
		dietId: 2,
	},
	{
		productId: 1,
		dietId: 3,
	},
	{
		productId: 1,
		dietId: 4,
	},
	{
		productId: 1,
		dietId: 5,
	},
	{
		productId: 1,
		dietId: 6,
	},
	{
		productId: 2,
		dietId: 1,
	},
	{
		productId: 2,
		dietId: 2,
	},
	{
		productId: 2,
		dietId: 3,
	},
	{
		productId: 3,
		dietId: 1,
	},
	{
		productId: 3,
		dietId: 2,
	},
	{
		productId: 3,
		dietId: 3,
	},
	{
		productId: 4,
		dietId: 1,
	},
	{
		productId: 4,
		dietId: 2,
	},
	{
		productId: 4,
		dietId: 3,
	},
	{
		productId: 5,
		dietId: 1,
	},
	{
		productId: 5,
		dietId: 2,
	},
	{
		productId: 5,
		dietId: 3,
	},
	{
		productId: 6,
		dietId: 1,
	},
	{
		productId: 6,
		dietId: 2,
	},
	{
		productId: 6,
		dietId: 3,
	},
	{
		productId: 7,
		dietId: 1,
	},
	{
		productId: 7,
		dietId: 5,
	},
	{
		productId: 7,
		dietId: 6,
	},
	{
		productId: 8,
		dietId: 1,
	},
	{
		productId: 8,
		dietId: 5,
	},
	{
		productId: 8,
		dietId: 6,
	},
	{
		productId: 9,
		dietId: 1,
	},
	{
		productId: 9,
		dietId: 5,
	},
	{
		productId: 9,
		dietId: 6,
	},
	{
		productId: 10,
		dietId: 1,
	},
	{
		productId: 10,
		dietId: 4,
	},
	{
		productId: 10,
		dietId: 5,
	},
	{
		productId: 11,
		dietId: 1,
	},
	{
		productId: 11,
		dietId: 2,
	},
	{
		productId: 11,
		dietId: 6,
	},
	{
		productId: 12,
		dietId: 1,
	},
	{
		productId: 12,
		dietId: 2,
	},
	{
		productId: 12,
		dietId: 6,
	},
	{
		productId: 13,
		dietId: 5,
	},
	{
		productId: 13,
		dietId: 6,
	},
	{
		productId: 14,
		dietId: 5,
	},
	{
		productId: 14,
		dietId: 6,
	},
	{
		productId: 15,
		dietId: 1,
	},
	{
		productId: 15,
		dietId: 2,
	},
	{
		productId: 15,
		dietId: 5,
	},
]

async function seed() {
	//THE ORDER MATTERS
	//USERS
	for (const user of users) {
		const theUser = await dbClient.user.create({
			data: user,
		})
		console.log({ theUser })
	}

	//CATEGORIES
	for (const diet of diets) {
		const theDiet = await dbClient.diet.create({
			data: diet,
		})
		console.log({ theDiet })
	}

	//PRODUCTS
	for (const product of products) {
		const theProduct = await dbClient.product.create({
			data: product,
		})
		console.log({ theProduct })
	}

	//DIETS ON PRODUCT
	for (const oneRelation of dietsOnProduct) {
		const theRelation = await dbClient.dietsOnProduct.create({
			data: oneRelation,
		})
		console.log({ theRelation })
	}
}

seed()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await dbClient.$disconnect()
	})
