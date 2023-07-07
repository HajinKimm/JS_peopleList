import React from 'react';
import StaffItem from './StaffItem';

const StaffList = () => {
    return (
        <ul className='list'>
            {
                data.map(item=><StaffItem key={item.id} item={item} />)
            }
            
        </ul>
    );
};

export default StaffList;