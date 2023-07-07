import React from 'react';
import ExImgItem from '../components/ExImgItem';
import { AddForm } from '../styled/styledStaff';

const StaffForm = () => {
    return (
        <AddForm >
            <button className='btn addshowBtn' onClick={onToggleAdd}>{isAdd ? '명단 추가 양식 숨기기' : '명단 추가 양식 보이기'}</button>
            <div className="addWrap" style={{ display: isAdd ? 'block' : 'none' }}>
                <form onSubmit={onSubmit}>
                    <p>
                        <label htmlFor="userName">이름</label>
                        <input type="text" id='userName' value={name} name='name' onChange={inputChange} ref={isRef} />
                    </p>
                    <p>
                        <label htmlFor="userJob">직업</label>
                        <input type="text" id='userJob' value={job} name='job' onChange={inputChange} />
                    </p>
                    <p>
                        <label htmlFor="userTel">연락처</label>
                        <input type="text" id='userTel' value={tel} name='tel' onChange={inputChange} />
                    </p>
                    <p>
                        <label htmlFor="userImg">사진</label>
                        <input type="text" id='userImg' value={imgUrl} name='imgUrl' onChange={inputChange} />
                    </p>
                    <button className='btn addBtn' type='submit'>직원 명단 추가</button>
                </form>
                <div className='imgEx'>
                    <h3>이미지 주소 예시</h3>
                    <ul className="imgList">
                        {
                            exaImg.map(item => <ExImgItem key={item.id} item={item} />)
                        }

                    </ul>
                </div>
            </div>
        </AddForm>
    );
};

export default StaffForm;