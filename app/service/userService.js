const UserModel = require("../model/userModel")

const  userService = {
    createUser :async function (obj){
        try{
            const newUser = new UserModel(obj);
            await newUser.save(newUser);

        }catch(e){
            console.log(e)
        }

    }
}

module.exports = userService