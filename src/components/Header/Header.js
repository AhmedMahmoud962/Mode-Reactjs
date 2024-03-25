import React from "react";
import DarkMode from "../DarkMode/DarkMode";

function Header() {
  return (
    <div className="header" style={{}}>
      <h3>elBOB Academy</h3>
      {/* dark mode */}
      <DarkMode />
    </div>
  );
}

export default Header;
