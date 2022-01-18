import React, { useState } from "react";
import burger from "../assets/Hamburger.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Button } from "@mui/material";
function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = () => {

    setOpenLinks(!openLinks)

  }

  return (
    <div className="navbar"> 
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={burger} />
        <div className="hiddenLinks">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Conatct </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Conatct </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
