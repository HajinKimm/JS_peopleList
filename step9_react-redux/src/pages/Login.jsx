import React, { useState } from 'react';
import { LoginWrap } from '../styled/styledStaff';
import { useDispatch } from 'react-redux'
import { login } from '../store/modules/authoritySlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [text, setText] = useState({email:'', password:''})
    const {email, password} = text 
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const inputChange = (e)=>{
        const {name, value} = e.target
        setText({...text, [name]:value})
    }
    const onSubmit =(e)=>{
        e.preventDefault()
        dispatch(login(text))
        if(password==='1234'){
            navigate('/')
        }
    }
    return (
        <LoginWrap>
            <div className="inner">
                <h2>LOGIN</h2>
                <form onSubmit={onSubmit} className='form'>
                    <div className='formWrap'>
                        <p>
                            <label>아이디</label>
                            <input type="email"  placeholder='이메일 형식' value={email} name='email' onChange={inputChange}/>
                        </p>
                        <p>
                            <label>비밀번호</label>
                            <input type="password"  placeholder='비밀번호 (1234)' value={password} name='password' onChange={inputChange} />
                        </p>

                    </div>
                        <p className='btnWrap'><button type='submit' className='btn'>로그인</button></p>
                </form>
            </div>
        </LoginWrap>
    );
};

export default Login;