import React from "react";
import "./style.css";

function Header() {
  // switch(window.location.pathname) {
  //   case "/aboutme":
  //     return <h2>About Me</h2>
  //   case "/work":
  //     return <h2>My Previous Work</h2>
  //   case "/contacts":
  //     return <h2>How to Contact</h2>
  //   default:
  //     return <h2>I'm Ashley!</h2>
  // }
  return (
    <div className="text-center">
      Built with React!
    </div>
  );
}

export default Header;
