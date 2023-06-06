import {obj} from './module/data.js'
import {showtxt} from './module/showtxt.js'

const btnDel = document.querySelector('.btnDel');
const btnShow = document.querySelector('.btnShow');
let conbox = document.querySelector('.con');
let isshow=true;

console.log(conbox)
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

// 하트 선택
function heart(){
    const heartCol = document.querySelectorAll('.list li i');
    heartCol.forEach(ele=>{
        ele.addEventListener('click',e=>{
            let current = e.currentTarget
            if(current.classList.contains('xi-heart-o')){
                current.setAttribute('class','xi-heart')
            }else{
                current.setAttribute('class','xi-heart-o')
            }
        })
    })
}

heart();