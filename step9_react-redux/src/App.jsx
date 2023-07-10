import React from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import GlobalStyle from './styled/Global';
import StaffForm from './pages/staffForm';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Warning from './pages/Warning';
const App = () => {
  return (
    <>
    <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/addStaff' element={<StaffForm/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/warning' element={<Warning/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;