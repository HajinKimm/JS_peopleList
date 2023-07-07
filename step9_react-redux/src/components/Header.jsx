import React from 'react';
import { HeaderWrap } from '../styled/styledStaff';
import NavBar from './NavBar';

const Header = () => {
    return (
        <HeaderWrap>
            <h1>직원 명단 관리</h1>
            <NavBar/>
        </HeaderWrap>
    );
};

export default Header;