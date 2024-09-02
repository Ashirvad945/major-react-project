const mongoose = require("mongoose");

const connectDb = async (req,res)=>{
    const connetion = await mongoose.connect(process.env.MONGO_URI);
    if(connetion.STATES.connected)return console.log("Database Connected");
    if(connetion.STATES.disconnected) return console.log("Database Disconnected");
};
module.exports = {connectDb};