import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to={'/'}>HOME</Link></li>
                <li><Link to={'/'}>ADD STAFF</Link></li>
                <li><Link to={'/'}>LOGIN</Link></li>
            </ul>
            
        </nav>
    );
};

export default NavBar;