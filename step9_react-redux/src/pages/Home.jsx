import React from 'react';
import StaffList from '../components/StaffList';
import { SttafList } from '../styled/styledStaff';

const Home = () => {
    return (
        <SttafList>
            <h2>직원 명단 리스트</h2>
            <div className="btnWrap">
                <button className='btn btnDel' >명단 전체 삭제</button>
                <button className='btn btnShow' > '명단 숨기기'  '명단 보이기'</button>
            </div>
            <div className="con" >
                <StaffList />
            </div>
        </SttafList>
    );
};

export default Home;