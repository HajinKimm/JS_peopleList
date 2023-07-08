import React, { useState } from 'react';
import ExImgItem from '../components/ExImgItem';
import { AddForm } from '../styled/styledStaff';
import exaImg from '../assets/api/ExaImgData';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addStaff } from '../store/modules/staffSlice';
const StaffForm = () => {
    const [text, setText] = useState({name:'',job:'',tel:'',imgUrl:''})
    const {name, job, tel, imgUrl} = text
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const inputChange = (e)=>{
        const {value, name} = e.target
        setText({...text, [name]:value})
    }
    const onSubmit =(e)=>{
        e.preventDefault()
        dispatch(addStaff(text))
        navigate('/')
        setText({name:'',job:'',tel:'',imgUrl:''})
    }
    return (
        <AddForm >
            <div className="inner">
                <h2>명단 추가 </h2>
                    <form onSubmit={onSubmit}>
                        <p>
                            <label htmlFor="userName">이름</label>
                            <input type="text" id='userName'  value={name} name='name' onChange={inputChange} />
                        </p>
                        <p>
                            <label htmlFor="userJob">직업</label>
                            <input type="text" id='userJob'  value={job} name='job' onChange={inputChange}  />
                        </p>
                        <p>
                            <label htmlFor="userTel">연락처</label>
                            <input type="text" id='userTel' value={tel} name='tel' onChange={inputChange} />
                        </p>
                        <p>
                            <label htmlFor="userImg">사진주소</label>
                            <input type="text" id='userImg' value={imgUrl} name='imgUrl' onChange={inputChange}/>
                        </p>
                        <button className='btn addBtn' type='submit'>직원 명단 추가</button>
                    </form>
                        <h3>이미지 주소 예시</h3>
                    <div className='imgEx'>
                        <ul className="imgList">
                            {
                                exaImg.map(item => <ExImgItem key={item.id} item={item} />)
                            }

                        </ul>
                    </div>
            </div>
        </AddForm>
    );
};

export default StaffForm;