import React from 'react';
import StaffItem from './StaffItem';

const StaffList = ({data, onDel, onHeart}) => {
    return (
        <ul className='list'>
            {
                data.map(item=><StaffItem key={item.id} item={item} onDel={onDel} onHeart={onHeart}/>)
            }
            
        </ul>
    );
};

export default StaffList;