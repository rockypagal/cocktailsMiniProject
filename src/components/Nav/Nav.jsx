import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";
import {BsSunFill} from 'react-icons/bs'
import { setDarkMode } from "../../features/cocktailsSlice";
const Nav = () => {
  const dispatch = useDispatch();
  const {darkMode} = useSelector(state=>state.cocktail);

  return (
    <nav className="container navSection">
      <div className="logo">
        <h2 style={{color:`${darkMode?'white':'darkslateblue'}`}}>RumJuice</h2>
      </div>
      <div className="links">
        <ul>
          <li className="li" style={{paddingTop:'6px',cursor:'pointer'}} onClick={()=> dispatch(setDarkMode())} >
            <BsSunFill />
          </li>
          <li className="li"  >
            <Link to="/" style={{color:`${darkMode?'white':'darkslateblue'}`}}>Home</Link>
          </li>
          <li>
            <Link to="/about"  style={{color:`${darkMode?'white':'darkslateblue'}`}}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
