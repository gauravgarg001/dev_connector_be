const mongoose = require("mongoose");

const connectDB = async () => {
    console.log('in db connector', process.env.CONNECTION_STRING    )
    try{
        await mongoose.connect(process.env.CONNECTION_STRING);
        return true;
    } catch(e){
        console.log('eror',e )
        throw new Error(e);
    }
}

module.exports = connectDB;