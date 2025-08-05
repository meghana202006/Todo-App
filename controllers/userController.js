const { User } = require('../models/userModel');
const registerController = async(req , res) =>{
    try{
        console.log(res.body);
        const {username , email , password} = res.body;
    if(!username || !email || !password) {
        return res.status(400).send({
            success: false,
            message: "All fields are required"
        })
    };
    const users = await User.find();
    const exists = users.some(user => user.email === email);
    if(exists) {
        return res.status(400).send({
            success: false,
            message: "Email already exists"
        });
    }
    }
    catch(error) {
        res.status(500).send({
            success: false,
            message: "Register API error",
            error: error.message
        })
    }
   
};


module.exports = {registerController}