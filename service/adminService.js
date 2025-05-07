const User = require("../models/User.models");


async function getUsers(page, limit){
    
    try{
        let new_user = await User.find()
        .skip((page - 1) * limit)
        .limit(parseInt(limit));

        const total = await User.countDocuments();

        return {
            data: new_user,
            pagination: {
                page,
                limit,
                total
            }
        };
    } catch(error){
        throw new Error(error);
    }
}

async function deleteUser(id){
    
    try{
        let new_user = await User.findByIdAndDelete({_id: id});
        return "user delete successfully";
    } catch(error){
        throw new Error(error);
    }
}

async function updateUser(id,data){

    try{
        let new_user = await User.findByIdAndUpdate({_id: id}, data, {new: true });
        return new_user;
    } catch(error){
        throw new Error(error);
    }
}

async function getSingleUser(id){

    try{
        let new_user = await User.findOne({_id: id});
        return new_user;
    } catch(error){
        throw new Error(error);
    }
}

module.exports = {
    getUsers,
    deleteUser,
    updateUser,
    getSingleUser
}