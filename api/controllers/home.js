const Deriv = require("../models/Deriv");
const FirstEU = require("../models/FirstEU");
const SecondEU = require("../models/SecondEU");

module.exports = {
  getIndex: async (req, res) => {
    try {
      // retrieve data from the mongoose model and limit it to the last 100
      const deriv = await Deriv.find().sort({ _id: -1 }).limit(100);
      const firstEU = await FirstEU.find().sort({ _id: -1 }).limit(100);
      const secondEU = await SecondEU.find().sort({ _id: -1 }).limit(100);

      const data = {
        deriv: deriv,
        firstEU: firstEU,
        secondEU: secondEU,
      };
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  },

  postIndex: async (req, res) => {
    try {
      // sends the data to react for rendering
      const deriv = new Deriv({
        balance: req.body.deriv.balance,
        equity: req.body.deriv.equity,
        time: req.body.deriv.time,
      });
      const newDeriv = await deriv.save();

      const firstEU = new Deriv({
        balance: req.body.deriv.balance,
        equity: req.body.deriv.equity,
        time: req.body.deriv.time,
      });
      const newFirstEU = await firstEU.save();

      const secondEU = new Deriv({
        balance: req.body.deriv.balance,
        equity: req.body.deriv.equity,
        time: req.body.deriv.time,
      });
      const newSecondEU = await secondEU.save();

      const data = {
        deriv: newDeriv,
        firstEU: newFirstEU,
        secondEU: newSecondEU,
      };

      res.json(data);
    } catch (error) {
      console.log(error);
    }
  },
};
