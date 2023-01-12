const data = require("../models/schema.js");

const getAllProducts = async (req, res) => {
	const { name, select,sort } = req.query;
	const queryObject = {};

	if (name) {
		queryObject.name = name;
	}
    let apiData=data.find(queryObject);
    if(sort){
        let sortFix=sort.replace(',',' ');
        apiData=apiData.sort(sortFix);
    }
        // queryObject.sort=sortFix;
    
    console.log(queryObject);

	let page = Number(req.query.page) || 1;
	let limit = Number(req.query.limit) || 10;

	let skip = (page - 1) * limit;
    apiData=apiData.skip(skip).limit(limit);
	const mydata = await apiData;
	// console.log(req.path);

	res.status(200).json({ msg: "IM all products", mydata });
};

const getAllProductsTesting = (req, res) => {
	res.status(200).json({ msg: "IM all products Testing" });
};

module.exports = { getAllProducts, getAllProductsTesting };
