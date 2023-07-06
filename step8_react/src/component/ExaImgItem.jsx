import React, { useState } from 'react';

const ExaImgItem = ({item}) => {
    const {id, imgurl} = item

    return (
        <li>
            <div className="imgbox">
                <img src={imgurl} alt={id}사진 />
            </div> 
            <p>{imgurl}</p>
        </li>
    );
};

export default ExaImgItem;