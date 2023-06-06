import {obj} from './module/data.js'

const btnDel = document.querySelector('.btnDel');
const btnShow = document.querySelector('.btnShow');
let conbox = document.querySelector('.con');
let isshow=true;


function showtxt () {
    let listUl = document.createElement('ul')
    listUl.setAttribute('class', 'list')
    obj.forEach(ele=>{
        listUl.innerHTML += `<li>
        <div class="pic">
        <img src="${ele.imgUrl}" alt="">
        </div>
        <div class="txt">
        <strong>${ele.name}</strong>
        <span>${ele.job}</span>
        <span>tel : ${ele.tel}</span>
        </div>
        <i class="xi-heart-o"></i>
        </li>`
    })
    conbox.append(listUl);
}
showtxt();

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
        showtxt();  
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