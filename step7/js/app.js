import {get, getAll} from './module/getEle.js'
import Staff from './module/staff.js'
import {hide} from './module/listHide.js'
import {StaffUI, LocalData} from './module/staffUI_local.js'

;(()=>{

    const btnShow = get('.btnShow');
    const addshowBtn = get('.addshowBtn');
    const form = get('form');
    const userName = get('#userName');
    const userJob = get('#userJob');
    const userTel = get('#userTel');
    const userImg = get('#userImg');
    const addWrap = get('.addWrap');
    

    //화면에 출력
    StaffUI.first();
    LocalData.getData();
    LocalData.showData();
    hide(btnShow,addshowBtn,addWrap)

    //명단추가버튼
    form.addEventListener('submit', e => {
        e.preventDefault();

        const uName = userName.value
        const uJob = userJob.value
        const uTel = userTel.value
        const uImg = userImg.value

        const staff = new Staff(uName, uJob, uTel, uImg)
        StaffUI.add(staff);
        LocalData.showData();
        StaffUI.reset();
    })

}) ();