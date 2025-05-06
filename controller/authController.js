const UserModels = require("../models/User.models");
const { registerUser } = require("../service/authService");

async function register(req, res){
    const data = req.body;

    // check email id exist
    let user = await UserModels.findOne({email: data.email});
    if(user) return res.status(400).json({ message: 'User already exists' });

    try{
        const user = await registerUser(data);
        res.status(200).json({ message: user });
    } catch(error){
        res.status(500).json({ message: error });
    }
}

module.exports = {
    register
}