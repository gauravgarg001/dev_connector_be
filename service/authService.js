const User = require("../models/User.models");


async function registerUser(data){
    // { username, dob, gender, mobile, email, adhar, pan, address, city, state, pincode, photo, video }
    
    try{
        let new_user = await User.create(data);
        return `${data.username} has been registered successfully`;
    } catch(error){
        throw new Error(error);
    }
}

module.exports = {
    registerUser
}