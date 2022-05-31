import mongoose from "mongoose";
import { useRouter } from "next/router";

const DB_URL = process.env.DB_URL;
const singinSchema = new mongoose.Schema({
    name : String,
    password : String,
    email : String,
});

let singin
try{
    singin = mongoose.model("singin");
}catch (error){
    singin = mongoose.model("singin" , singinSchema);
}

class Singinmodel {
    constructor() {
        mongoose.connect(DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    addOne(params){
        let newSingin = new singin(params)
        return newSingin.save();
    }
    findUser(params){
        return singin.findById(params);
    }
    updateUser(params){
        const { _id } = params;
        const { name, password, email} = params;
        const newData = {name, password, email}
        return singin.findByIdAndUpdate(_id, newData)
    }
    deleteUser(params){
        return singin.findByIdAndDelete(params)
    }
}

export default new Singinmodel();