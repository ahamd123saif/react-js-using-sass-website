import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div>
     <nav>
        <h1>Toutube</h1>
        <main>
            <HashLink to={"/#home"}>home</HashLink>
            <Link to={"/contact"}>contact</Link>
            <HashLink to={"/#about"}>about</HashLink>
            <HashLink to={"/#brands"}>brand</HashLink>
            <HashLink to={"/services"}>services</HashLink>
        </main>
     </nav>
    </div>
  )
}

export default Header
