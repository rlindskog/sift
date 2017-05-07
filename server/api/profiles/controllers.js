import profileModel from './models'

export const profile = {
	get(req, res) {
		res.json({ message: 'this is a profile' })
	}
}