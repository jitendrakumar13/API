const express = require('express');
const route=require("./routes/route.js")
const app = express();
const connectdb=require("./db/connect.js");
const uri ="mongodb+srv://root:root@cluster0.ozktq3t.mongodb.net/api?retryWrites=true&w=majority";


app.get('/', (req, res) => {
    res.send('Hello World ');
})

app.use("/api/products",route);
// connection();
const start=async() => {

    try{
        await connectdb(uri);
    }catch(e){

        console.log("error",e.message);
    }
};

start();
app.listen(5000,()=>{
    console.log("server is runningg 5000");
});