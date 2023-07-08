import React from 'react';
import StaffItem from './StaffItem';
import {useSelector} from 'react-redux'
const StaffList = () => {
    const {data} = useSelector(state=>state.staff)
    return (
        <ul className='list'>
            {
                data.map(item=><StaffItem key={item.id} item={item} />)
            }
        </ul>
    );
};

export default StaffList;