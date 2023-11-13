const mongoose = require('mongoose');

mongoose.userSchema = new mongoose.Schema({
    username: String,
    role: { type: String, enum: ["superadmin", "admin", "user"] ,default:'user'},
    email: String,
    password:String,
    is_varified: Boolean,

},
{
    timestamps: true
});

module.exports = mongoose.model('User', mongoose.userSchema);
