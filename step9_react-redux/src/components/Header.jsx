import React from 'react';
import { HeaderWrap } from '../styled/styledStaff';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderWrap>
            <div className="inner">
                <h1><Link to={'/'}>직원 명단 관리</Link></h1>
                <NavBar/>
            </div>
        </HeaderWrap>
    );
};

export default Header;