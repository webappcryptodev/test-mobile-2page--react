import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
   return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand about" to="/member">
        mmm
      </Link>
      <Link className="navbar-brand about" to="/">
      </Link>
      <Link className="navbar-brand network" to="/payment">
        pppp
      </Link>
    </nav>
   )
}

export default Navbar;