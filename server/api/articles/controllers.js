import aritclesModel from './models'

export const articles = {
	async get(req, res) {
		const articles = await aritclesModel.find({})
	} 
} 