import React from 'react';
import { WarningWrap } from '../styled/styledStaff';
import { Link } from 'react-router-dom';

const Warning = () => {
    return (
        <WarningWrap>
            <div className="inner">
            <div>
                <h2>관리자 이외에는 이용이 불가합니다.</h2>
                <strong>로그인 하시겠습니까?</strong>
                <p>
                    <button><Link to={'/login'}>예</Link></button>
                    <button><Link to={-1}>아니요</Link></button>
                </p>
            </div>

            </div>
        </WarningWrap>
    );
};

export default Warning;