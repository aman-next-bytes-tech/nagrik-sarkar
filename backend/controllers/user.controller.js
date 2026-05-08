const User = require('../models/user.model');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

const createUser = async (req, res) => {
    const {email} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if (existingUser){
            return res.status(400).json({message: "Email already exists"});
        }

        const createdUser = await User.create(req.body);
        res.status(201).json(createdUser);
    } catch (error) {
        console.error(error);
        if(error.name === 'ValidationError'){
            return res.status(400).json({message: error.message});
        }
        res.status(500).json({ message: "Server Error" });
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    try{
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        if(!updatedUser){
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json(updatedUser);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try{
        const deletedUser = User.findByIdAndDelete(id);
        if(!deletedUser){
            return res.status(404).json({message: 'User not found'});
        }

        res.status(200).json(deletedUser);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};