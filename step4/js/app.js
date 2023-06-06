import {obj} from './module/data.js'
import {showtxt} from './module/showtxt.js'
import {heart} from './module/heart.js'

const btnDel = document.querySelector('.btnDel');
const btnShow = document.querySelector('.btnShow');
let conbox = document.querySelector('.con');
let isshow=true;

showtxt(conbox, obj);

//명단삭제버튼
btnDel.addEventListener('click',e=>{
    let listUl = document.querySelector('.list')
    if(listUl !== null){
        listUl.remove()
    }
    isshow = false;
})

//명단보기버튼
btnShow.addEventListener('click',e=>{
    if(isshow === false){
        showtxt(conbox, obj);  
        heart();
        isshow = true;
    }
})

heart();