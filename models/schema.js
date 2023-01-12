const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		index: true,
		unique: true,
	},
	name: {
		type: String,
		//required:true
	},
	company_type: {
		type: String,
		//required:true
	},
	rating: {
		type: Number,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
		required: true,
	},
	size: {
		type: String,
	},
});

console.log("created schema");
const model = mongoose.model("Product", productSchema);

module.exports = model;
