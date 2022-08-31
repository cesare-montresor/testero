import {Link} from "react-router-dom";
import React from "react";


function NavBar() {
    return (
        <div className='menu-main btn-bar'>
            <Link to="/"> Test List </Link>
            <Link to="/addTest"> Add Test </Link>
            <Link to="/apiTest"> API Test </Link>
        </div>
    );
}


export {NavBar};