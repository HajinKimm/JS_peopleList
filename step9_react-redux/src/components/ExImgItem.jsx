import React from 'react';

const ExImgItem = ({item}) => {
    const {id, imgurl} = item

    return (
        <li>
            <div className="imgbox">
                <img src={imgurl} alt={id} />
            </div> 
            <p>{imgurl}</p>
        </li>
    );
};

export default ExImgItem;