const usercontroller = require("./controller/userController")


module.exports =(app)=>{
    app.route("/signup").post(usercontroller.createUser);
}