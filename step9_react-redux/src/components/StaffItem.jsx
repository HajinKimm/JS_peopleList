import React from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { heartSelect, removeStaff } from '../store/modules/staffSlice';
const StaffItem = ({item}) => {
    const {id, name, job, tel, imgUrl, islike} = item
    const dispatch = useDispatch()
    return (
        <li>
            <div className="pic">
                <img src={imgUrl} alt={name} />
            </div>
            <div className="txt">
                <strong>{name}</strong>
                <span>{job}</span>
                <span>{tel}</span>
            </div>
            <div className="likeWrap">
                <i onClick={()=>dispatch(heartSelect(id))}>{islike?<AiFillHeart/>:<AiOutlineHeart/>} </i>
                <button className='resignBtn' onClick={()=>dispatch(removeStaff(id))}>퇴사</button>
            </div>
        </li>
    );
};

export default StaffItem;