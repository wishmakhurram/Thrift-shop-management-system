const User = require('../Models/userModel');
const jwt = require('jsonwebtoken'); 
const { transporter } = require('../Utils/nodemailer');
// Apis for user
async function addUser(req,res){
    
    const { username, email, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // If the email is unique, proceed with user creation
    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
    // try {
    //     // const mailOption = {
    //     //     from: `Muhammad Uzair <uzairrchattha99@gmail.com>`,
    //     //     to: email,
    //     //     subject: 'You have been Registered',
    //     //     html: `<p>Welcome You are Successfully Registered</p>`
    //     // }
    //     const users = await User.create(req.body);
    //     // console.log('data stored');
    //     //     transporter.sendMail(mailOption, (error, info) => {
    //     //         if (error) throw error;
    //     //         else {
    //     //             console.log('email has sent');
    //     //         }
    //     //     });
    //     res.status(201).json(users);
    // } catch (error) {
    //     res.status(500).json({error:error.message});
    // }
}

async function getAllUser(req,res){
    try {
        const users = await User.find();
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

async function updateUser(req,res){
    try {
        console.log(req.params.id)
        console.log(req.body)
        const users = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
async function deleteUser(req,res){
    try {
        const users = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
// Functions for user
function GenerateToken(user){
     const payload = {
     role: user.role,
     id: user._id,
    }
    const token = jwt.sign(payload,"12345");
    return token;
}
    


module.exports = {
    getAllUser,
    addUser,
    updateUser,
    deleteUser,
    GenerateToken

};