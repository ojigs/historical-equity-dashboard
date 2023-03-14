const { PythonShell } = require("python-shell");
const Deriv = require("../models/Deriv");
const FirstEU = require("../models/FirstEU");
const SecondEU = require("../models/SecondEU");

async function pyshell() {
  try {
    const path = "./pyscript/main.py";

    // create different instances of pythonshell to connect to our script
    let pyshell1 = new PythonShell(path);
    let pyshell2 = new PythonShell(path);
    let pyshell3 = new PythonShell(path);

    // run script and send data every minute
    setInterval(() => {
      console.log("running");
      pyshell1.send(
        JSON.stringify({
          type: "run script",
          server: "server1",
        })
      );
      pyshell2.send(
        JSON.stringify({
          type: "run script",
          server: "server2",
        })
      );
      pyshell3.send(
        JSON.stringify({
          type: "run script",
          server: "server3",
        })
      );
    }, 60000);

    // use stdin to receive message from python sccript
    pyshell1.on("message", async (message) => {
      console.log(message);
      let info = JSON.parse(message);

      console.log("equity is ", info.equity);

      await Deriv.create({
        equity: info.equity,
        balance: info.balance,
        time: info.time,
      });
    });

    pyshell2.on("message", async (message) => {
      console.log(message);
      let info = JSON.parse(message);

      console.log("equity is ", info.equity);

      await FirstEU.create({
        equity: info.equity,
        balance: info.balance,
        time: info.time,
      });
    });

    pyshell3.on("message", async (message) => {
      console.log(message);
      let info = JSON.parse(message);

      console.log("equity is ", info.equity);

      await SecondEU.create({
        equity: info.equity,
        balance: info.balance,
        time: info.time,
      });
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = pyshell;
