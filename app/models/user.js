// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// // Google Oauth 2.0 - checking if user already exists and if not create create it
// userSchema.statics.findOrCreate = function findOrCreate(profile, cb){
//     var userObj = new this();
//     this.findOne({_id : profile.id},function(err,result){
//         if(!result){
//             // userObj.google.name = profile.displayName;
//             userObj.google.id = profile.googleId;
//             userObj.save(cb);
//         }else{
//             cb(err,result);
//         }
//     });
// };

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
