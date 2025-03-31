const User = require('../models/userModel');
const { generateToken } = require('../service/auth.service');


exports.registerUser = async (req, res) => {
    try {
        const newUser = await new User(req.body);
        const saveUser = await newUser.save();
        
        await User.findByIdAndUpdate(
            req.body.user,
            { $push: { Users: saveUser._id } },
            { new: true }
        );
        const tokenUser = generateToken(newUser.email);
        res.status(201).json({
            user: saveUser,
            token: tokenUser
        });
    } catch(e) {
        console.error(e)
    }
}

