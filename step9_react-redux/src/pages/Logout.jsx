import React from 'react';
import { LoginWrap } from '../styled/styledStaff';
import { logout } from '../store/modules/authoritySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {staffathority} = useSelector(state=>state.authority)
    return (
        <LoginWrap>
        <div className="inner">
            <h2>LOGOUT</h2>
            <div className='form'>
            <div className='formWrap'>
                <p className='loginInfo'>로그아웃 하시겠습니까?</p>
                <span>이메일 : {staffathority.email}</span>
            </div>
                <p className='btnWrap'>
                    <button onClick={()=>{navigate('/login'), dispatch(logout())}} className='btn'>예</button>
                    <button onClick={()=>navigate('/')} className='btn'>아니요</button>
                </p>
            </div>

        </div>
    </LoginWrap>
    );
};

export default Logout;