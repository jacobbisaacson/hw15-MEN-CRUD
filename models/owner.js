const mongoose = require('mongoose')

const ownerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	scratchesToGive: {
		type: Number,
		required: true,
	}
})

const Owner = mongoose.model('Owner', ownerSchema)
module.exports = Owner




