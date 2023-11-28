const mongoose = require('mongoose');

mongoose.userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true, required: true },
    password:String,
    isAdmin:{
        type:Boolean,
        default:false
    },
    is_varified: Boolean,

},
{
    timestamps: true
});

module.exports = mongoose.model('User', mongoose.userSchema);
