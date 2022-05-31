import singinModel from "./singin.Model";

export default async function handler(req , res){

    if(req.method === "POST"){
        const { name , password ,  email } = req.body;
        const newData = { name , password , email }
        const resData = await singinModel.addOne(newData);

        res.send(req.body)  
    }else if (req.method === "GET"){
        const {_id} = req.body
        const findData = await singinModel.findUser(_id)
        res.send(req.body)
    }else if (req.method === "DELETE"){
        const {_id} = req.body
        const deleteDate = await singinModel.deleteUser(_id)
    }else if (req.method === "PATCH"){
        const {_id} = req.body
        const updateData = await singinModel.updateUser(_id)

    }
}