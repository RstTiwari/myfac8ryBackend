const CountersModel = require("../model/counterModel")

const CountersService = {
  getCounter: async function (counterName) {
    let data = [];
    try {
      data = await CountersModel.findOneAndUpdate(
        { counterName: counterName },
        {
          $inc: { counterSeq: 1 },
        },
        { new: true }
      ).lean();
    } catch (e) {
      console.log(e);
    }
    return data;
  },
};
module.exports = CountersService;
