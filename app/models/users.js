const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({ 
        name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    telefono: {
        type: String
    },
       
}, 
    {
        
            timestamps: true,
            versionkey: false
        
    })


module.exports = mongoose.model('users', UserSchema)