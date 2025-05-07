const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.CONNECTION_STRING);
        return true;
    } catch(e){
        console.log('eror',e )
        throw new Error(e);
    }
}

module.exports = connectDB;