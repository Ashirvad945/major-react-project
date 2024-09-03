//4 step procedure to make server
//Express ko bulna is file me
const express = require("express");
const dotenv = require("dotenv");
const {readdirSync} = require("fs");
const { connectDb } = require("./connection");
const cors = require("cors")

//require the routes
//import the route here
//const authRoute = require("./routes/authRoutes");
//binding the env
dotenv.config();
//Express ko call karna padega ek variable me
const app = express()
//port define karna hoga . port hota hai darwaja
 const port = process.env.PORT ||5000 ;

connectDb()

//Makingroute
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
res.send("<center><h1>Server is running guys...</h1></center>")
});
//how to use routes
//app.use("/api",authRoute);
//importing and using routes dynamically
readdirSync("./routes").map((route)=>
 app.use("/api",require(`./routes/${route}`))
);

//console.log(readdirSync("./routes"))
//type of request
//GET->to get the dat from the server
//POST->to post the data to the server
//PUT->to udpate the data on the server
//DELETE -> to gate the data from server
//server ko listen karega
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});
