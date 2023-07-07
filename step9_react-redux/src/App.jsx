import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import GlobalStyle from './styled/Global';
import StaffForm from './pages/staffForm';
const App = () => {
  return (
    <>
    <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/addStaff' element={<StaffForm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;