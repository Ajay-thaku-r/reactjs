import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <div>
            <header>
               <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <h3 className="logo"><Link to="/">The Logo</Link></h3>
                        </div>
                        <div className='col-8 justify-content-end align-items-center d-flex'>
                            <ul className='main-menu'>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/factorial">Factorial</Link></li>
                            </ul>
                        </div>
                    </div>
               </div>
            </header>
        </div>
    )
}
export default Header;