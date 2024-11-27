import React from "react";


const headerStyle = {
  backgroundColor: '#1fd655',
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  padding: "10px",
  fontSize: "2rem",
};

function Header() {
  return (
    <header style={headerStyle}>
      WEATHER APP
    </header>
  );
}

export default Header;
