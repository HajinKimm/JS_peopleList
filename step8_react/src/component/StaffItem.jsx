import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const StaffItem = ({item, onDel, onHeart}) => {
    const {id, name, job, tel, imgUrl, islike} = item
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
                <i onClick={()=>onHeart(id)}>{islike?<AiFillHeart/>:<AiOutlineHeart/>}</i>
                <button className='resignBtn' onClick={()=>onDel(id)}>퇴사</button>
            </div>
        </li>
    );
};

export default StaffItem;