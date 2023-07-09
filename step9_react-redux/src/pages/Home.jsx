import React, { useState } from 'react';
import StaffList from '../components/StaffList';
import { SttafList } from '../styled/styledStaff';
import { useDispatch, useSelector } from 'react-redux';
import { allRemoverStaff } from '../store/modules/staffSlice';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch()
    const {staffathority} = useSelector(state=>state.authority)
    const [isOpen , setIsOpen ] = useState(false)
    const navigate = useNavigate()
    const onIsOpen = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <SttafList>
            <div className="inner">
                <h2>직원 명단 리스트</h2>
                <div className="btnWrap">
                    {
                        staffathority?
                        <button className='btn btnDel' onClick={()=>dispatch(allRemoverStaff())} >명단 전체 삭제</button>
                        : <button className='btn btnDel' onClick={()=>navigate('/warning')}> 명단 전체 삭제</button>
                    }
                    <button className='btn btnShow' onClick={onIsOpen}>{isOpen? '명단 보기' : '명단 숨기기'}</button>
                </div>
                <div className="con"  style={{display:isOpen?'none':'block'}}>
                    <StaffList />
                </div>

            </div>
        </SttafList>
    );
};

export default Home;