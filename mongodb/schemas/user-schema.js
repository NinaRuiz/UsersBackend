//Create User Schema

/*
    Users will have a name, a surname, an email and a password.
 */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema (
    {name: String},
    {surname: String},
    {email: String},
    {password: String},
);

const model = mongoose.model('User', UserSchema);

module.exports = model;

