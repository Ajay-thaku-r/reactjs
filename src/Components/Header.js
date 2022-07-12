import React from "react";
import { Outlet, Link } from "react-router-dom";
const Header = () => {
    return(
        <div>
            <header>
               <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <h3>The Logo</h3>
                        </div>
                        <div className='col-8 justify-content-end align-items-center d-flex'>
                            <ul className='main-menu'>
                                <li><Link to="/menuA">Menu A</Link></li>
                            </ul>
                        </div>
                    </div>
               </div>
            </header>
        </div>
    )
}
export default Header;