const userService = require("../service/userService");
const counterService = require("../service/counterService");
const usercontroller = {
  createUser: async function (req, res) {
    const { companyName, name, number, email, password } = req.body;
    const userCounter = await counterService.getCounter("users");
    const userid = userCounter.counterSeq;
    if(!companyName){
      throw new Error("pls enter comapanyName")
    }
    
    if (!name) {
      throw new Error("pls enter contactname");
    }
    
    if (!number) {
      throw new Error("pls enter number");
    }
    
    if (!email) {
      throw new Error("pls enter email");
    }
    
    if (!password) {
      throw new Error("pls enter passwrod");
    }
    
    try {
      const newUser = {
        userid: userid,
        companyName: companyName,
        name: name,
        number: number,
        email: email,
        password: password,
      };

      let savedUser = await userService.createUser(newUser);
      let response = {};

      if (savedUser) {
        response = {
          sucess: 1,
          message: "you have been regitred Sucessfully",
        };
      }
      res.send(response);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = usercontroller;
