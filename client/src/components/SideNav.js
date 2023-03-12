import React, { useState } from "react";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div
        id="mySidenav"
        className={isOpen ? "sidenav open" : "sidenav"}
        onClick={closeNav}
      >
        <span>About</span>
        <span>Services</span>
        <span>Clients</span>
        <span>Contact</span>
      </div>
      <div className={isOpen ? "main open" : "main"}>
        <h2>
          {isOpen ? (
            <span
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={isOpen ? closeNav : openNav}
            >
              &times;
            </span>
          ) : (
            <span
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={isOpen ? closeNav : openNav}
            >
              &#9776;
            </span>
          )}
          Historical Equity Dashboard
        </h2>
      </div>
    </div>
  );
};

export default Sidenav;
