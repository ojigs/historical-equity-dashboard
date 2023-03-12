import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "./components/Charts";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState();
  const [selected, setSelected] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    axios.get("http://localhost:4000/").then((result) => {
      const doc = {
        deriv: result?.data?.deriv,
        firstEU: result?.data?.firstEU,
        secondEU: result?.data?.secondEU,
      };
      setData(doc);
    });
  }, [data]);

  const handleClick = (account) => {
    setSelected(account);
  };

  return (
    <div className="">
      <div
        id="mySidenav"
        className={isOpen ? "sidenav open" : "sidenav"}
        onClick={closeNav}
      >
        <span onClick={() => handleClick("deriv")}>Get Deriv data</span>
        <span onClick={() => handleClick("firstEU")}>Get FirstEU data</span>
        <span onClick={() => handleClick("secondEU")}>Get SecondEU data</span>
      </div>
      <div className={isOpen ? "main open" : "main"}>
        <h2>
          {isOpen ? (
            <span
              className="nav-toggle"
              style={{
                color: "red",
              }}
              onClick={isOpen ? closeNav : openNav}
            >
              &times;
            </span>
          ) : (
            <span
              className="nav-toggle"
              style={{
                color: "#3333cc",
              }}
              onClick={isOpen ? closeNav : openNav}
            >
              &#9776;
            </span>
          )}
          Historical Equity Dashboard
        </h2>
        {selected && <Chart data={data && data[selected]} title={selected} />}
      </div>
    </div>
  );
}

export default App;
