const { getUsers, deleteUser, updateUser, getSingleUser } = require("../service/adminService");

async function getAllUsers(req, res){
    const {page, limit} = req.query;

    try{
        const user = await getUsers(page, limit);
        res.status(200).json({
            data: user, 
            message: "users fetch successfully" 
        });
    } catch(error){
        console.log(error, "error")
        res.status(500).json({ message: error });
    }
}

async function deleteUserById(req,res){
    const {id} = req.params;

    try{
        const user = await deleteUser(id);
        res.status(200).json({
            message: user 
        });
    } catch(error){
        console.log(error, "error")
        res.status(500).json({ message: error });
    }
}

async function updateById(req,res){
    const {id} = req.params;
    const data = req.body;

    try{
        const user = await updateUser(id,data);
        res.status(200).json({
            data: user,
            message: "user update successfully" 
        });
    } catch(error){
        console.log(error, "error")
        res.status(500).json({ message: error });
    }
}

async function getUserById(req,res){
    const {id} = req.params;

    try{
        const user = await getSingleUser(id);
        res.status(200).json({
            data: user,
            message: "user fetch successfully" 
        });
    } catch(error){
        console.log(error, "error")
        res.status(500).json({ message: error });
    }
}

module.exports = {
    getAllUsers,
    deleteUserById,
    updateById,
    getUserById
}