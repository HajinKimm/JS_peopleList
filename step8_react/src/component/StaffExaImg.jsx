import React, { useState } from 'react';
import ExaImgItem from './ExaImgItem';
import ExaImgList from '../assets/api/ExaImgData'

const StaffExaImg = () => {
    const [exaImg, setExaImg] = useState(ExaImgList);

    return (
        <div className='imgEx'>
            <h3>이미지 주소 예시</h3>
            <ul className="imgList">
                {
                    exaImg.map(item=><ExaImgItem key={item.id} item={item}/>)
                }
                
            </ul>
        </div>
    );
};

export default StaffExaImg; 