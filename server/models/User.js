const {Schema, model, ObjectId} = require ("mongoose");

const User = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

module.exports = model('User', User);