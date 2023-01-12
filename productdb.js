const connectdb=require("./db/connect.js");
const Product=require("./models/schema.js");
 const Productjson=require("./product.json");
// 
const url="mongodb+srv://root:root@cluster0.ozktq3t.mongodb.net/api?retryWrites=true&w=majority";

const start=async () =>{

    try {
        await connectdb(url);
         
        await Product.create(Productjson);
        console.log("Connected kk");
    } catch (error) {
        console.log(error.message)
    }
}
 console.log("Connected to MongoD sucessfull");
start();
// module.exports=data;