let isshow=true;
let isadd=true;
let con = document.querySelector('.con')

export const hide = (btnShow,addshowBtn,addWrap) =>{
    
    //직원명단 숨기기&보이기 버튼
    btnShow.addEventListener('click',e=>{
        if(isshow){
            con.style.display="none"
            btnShow.textContent='명단 보이기'
        }else{
            con.style.display="block"
            btnShow.textContent='명단 숨기기'
        }
        isshow = !isshow
    })

    //명단추가 숨기기&보이기 버튼
    addshowBtn.addEventListener('click',e=>{
        if(isadd){
            addWrap.style.display="none"
            addshowBtn.textContent = '명단 추가 양식 보이기'
        }else{
            addWrap.style.display="block"
            addshowBtn.textContent = '명단 추가 양식 숨기기'
        }
        isadd = !isadd
    })
}