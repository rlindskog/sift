export function filterSensative(user) {
	let newUser = Object.keys(user.toObject()).reduce((acc, item) => {
	  if (item !== 'password' && item !== 'createdAt' && item !== 'updatedAt') {
			acc[item] = user[item]
		}
		return acc
	}, {})
	return newUser
}