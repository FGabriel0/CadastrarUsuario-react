import React from "react";
import  "./Navbar.css";
import { FaHome,FaUsers } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <Link to='/'>
         <FaHome />
          Inicio
        </Link>

        <Link to='/user'>
          <FaUsers />
          Usuários
       </Link>
      </nav>
    </aside>
  );
};

export default Navbar;
