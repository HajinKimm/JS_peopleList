import React, { useRef, useState } from 'react';


const StaffForm = ({onAdd}) => {
    const isRef = useRef(null)
    const [user,setUser] = useState({
        name:'', job:'', tel:'', imgUrl:''
    })
    const {name, job, tel, imgUrl} = user
    const inputChange=(e)=>{
        const {value, name} = e.target
        setUser({...user, [name]:value})
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!name || !job || !tel || !imgUrl) return
        onAdd(user)
        setUser({name:'', job:'', tel:'', imgUrl:'' })
        isRef.current.focus()
    }
    return (
        <form onSubmit={onSubmit}>
            <p>
                <label htmlFor="userName">이름</label>
                <input type="text" id='userName' value={name} name='name' onChange={inputChange} ref={isRef}/>
            </p>
            <p>
                <label htmlFor="userJob">직업</label>
                <input type="text" id='userJob' value={job} name='job' onChange={inputChange}/>
            </p>
            <p>
                <label htmlFor="userTel">연락처</label>
                <input type="text" id='userTel' value={tel} name='tel' onChange={inputChange}/>
            </p>
            <p>
                <label htmlFor="userImg">사진</label>
                <input type="text" id='userImg' value={imgUrl} name='imgUrl' onChange={inputChange}/>
            </p>
            <button className='btn addBtn' type='submit'>직원 명단 추가</button>
        </form>
    );
};

export default StaffForm;