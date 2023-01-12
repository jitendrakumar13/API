const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connection = async () => {
	const url =
		"mongodb+srv://root:root@cluster0.ozktq3t.mongodb.net/?retryWrites=true&w=majority";
	try {
		await mongoose.connect(url, { useNewUrlParser: true });

		console.log("Sucessfully connected Database connect.js");
	} catch (error) {
		console.log("error while connecting Database", error.message);
	}
};

const connectdb = (uri) => {
	console.log("connect db");
	return mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		 
	});
};

module.exports =  connectdb;
