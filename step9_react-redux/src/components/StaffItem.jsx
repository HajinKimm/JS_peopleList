import React from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { heartSelect, removeStaff } from '../store/modules/staffSlice';
import { useNavigate } from 'react-router-dom';
const StaffItem = ({item}) => {
    const {id, name, job, tel, imgUrl, islike} = item
    const {staffathority} = useSelector(state=>state.authority)
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
                {
                    staffathority?
                    <>
                    <i onClick={()=>dispatch(heartSelect(id))}>{islike?<AiFillHeart/>:<AiOutlineHeart/>}</i>
                    <button className='resignBtn' onClick={()=>dispatch(removeStaff(id))}>퇴사</button>
                    </>
                    :
                    <>
                    <i  onClick={()=>navigate('/warning')}> {islike?<AiFillHeart/>:<AiOutlineHeart/>}  </i>
                    <button className='resignBtn' onClick={()=>navigate('/warning')}>퇴사</button>
                    </>

                }
            </div>
        </li>
    );
};

export default StaffItem;