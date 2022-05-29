import mongoose from "mongoose";

const mongooseURL = require('mongoose')
const mongoBD = 'MongoBD-text(localhost:27017)'
const singinSchema = mongoose.singinSchema({
    name:{type: String, required: true , max: 100},
    password:{type: String, required: true },
    email:{type: String ,require: true},
    date_of_birth:{type: Date}
});
const singin = mongoose.model('singin', singinSchema);
