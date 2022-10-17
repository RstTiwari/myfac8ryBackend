const express = require("express");
const userService = require("../service/userService");

const router = express.Router()

router.get("/alluser" , async (req, res) =>{
    try {
      let userData = await userService.getAlluser();
      if (userData.length < 1) {
        throw new Error("No user Data found");
      }
      let respons = {
        success: 1,
        data: userData,
      };
      res.send(respons);
    } catch (e) {
      console.log(e);
    }

})


module.exports = router;
