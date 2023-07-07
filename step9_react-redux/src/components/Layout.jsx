import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { Wrap } from '../styled/styledStaff';

const Layout = () => {
    return (
        <Wrap>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </Wrap>
    );
};

export default Layout;