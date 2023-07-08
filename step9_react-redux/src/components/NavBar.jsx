import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const {staffthority} =useSelector(state=>state.authority)
    
    const location = useLocation()
    return (
        <nav>
            <ul>
                <li><Link to={'/'}  className={location.pathname==='/'?'on':''}>HOME</Link></li>
                {
                    staffthority
                    ?
                    <>
                    <li><span>ADD STAFF</span></li>
                    <li><Link to={'/login'} className={location.pathname==='/login'?'on':''}>LOGIN</Link></li>
                    </> 
                    :
                    <>
                    <li><Link to={'/addStaff'} className={location.pathname==='/addStaff'?'on':''}>ADD STAFF</Link></li>
                    <li><Link to={'/logout'} className={location.pathname==='/logout'?'on':''}>LOGOUT</Link></li>
                    </> 
                }
            </ul>
            
        </nav>
    );
};

export default NavBar;