const userModel = require("../model/userModel");
const UserModel = require("../model/userModel")

const userService = {
  createUser: async function (obj) {
    try {
      const newUser = new UserModel(obj);
      await newUser.save(newUser);
    } catch (e) {
      console.log(e);
    }
  },
  
  getAlluser :async function(){
    let data = [];
    try{
        data = await userModel.find()
    }catch(e){
        console.log(e)
    }
    console.log(data)

  }
};

module.exports = userService