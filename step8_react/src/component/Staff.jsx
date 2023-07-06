import React, { useRef, useState } from 'react';
import StaffList from './StaffList';
import StaffForm from './StaffForm';
import StaffExaImg from './StaffExaImg';
import dataList from '../assets/api/StaffData'

const Staff = () => {
    const no = useRef(dataList.length+1);
    const [data, setData]=useState(dataList);
    const [isCon,setIsCon] = useState(true);
    const [isAdd,setIsAdd] = useState(true);
    

    const onAllDel = ()=>{
        setData([]);
    }
    const onToggleCon=()=>{
        setIsCon(!isCon)
    }
    const onToggleAdd=()=>{
        setIsAdd(!isAdd)
    }

    //sttafList 기능
    const onDel=(id)=>{
        setData(data.filter(item=>item.id !== id))
    }

    //StaffForm 기능
    const onAdd =(user)=>{
        user.id=no.current++
        setData([...data,user])
        user.islike=false
    }
    const onHeart =(id)=>{
        setData(data.map(item=>item.id===id?{ ...item , islike: !item.islike}: item))
    }

    return (
        <div className='wrap'>
            <div className="content">
                <div className="sttafList">
                    <h2>직원 명단 리스트</h2>
                    <div className="btnWrap">
                        <button className='btn btnDel' onClick={onAllDel}>명단 전체 삭제</button>
                        <button className='btn btnShow' onClick={onToggleCon}>{isCon?'명단 숨기기':'명단 보이기'}</button>
                    </div>
                    <div className="con" style={{display: isCon?'block':'none'}}>
                        <StaffList data={data} onDel={onDel} onHeart={onHeart}/>
                    </div>
                </div>
                <aside className="side" >
                    <button className='btn addshowBtn' onClick={onToggleAdd}>{isAdd?'명단 추가 양식 숨기기':'명단 추가 양식 보이기'}</button>
                    <div className="addWrap" style={{display: isAdd?'block':'none'}}>
                        <StaffForm onAdd={onAdd}/>
                        <StaffExaImg/>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Staff;