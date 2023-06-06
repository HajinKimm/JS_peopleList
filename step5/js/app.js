const btnShow = document.querySelector('.btnShow');
const btnDel = document.querySelector('.btnDel');
const addshowBtn = document.querySelector('.addshowBtn');
const form = document.querySelector('form');
const userName = document.querySelector('#userName');
const userJob = document.querySelector('#userJob');
const userTel = document.querySelector('#userTel');
const userImg = document.querySelector('#userImg');
const addWrap = document.querySelector('.addWrap');
const listbox = document.querySelector('.list');
let isshow=true;
let isadd=true;
const obj = [
    {id:1, name: '이진솔', job: '웹퍼블리셔', tel: '010-2739-1928', imgUrl: 'https://cdn.pixabay.com/photo/2016/01/18/05/09/woman-1146038_1280.jpg',islike:false },
    {id:2, name: '박예린', job: 'MD', tel: '010-8932-3872', imgUrl: 'https://cdn.pixabay.com/photo/2017/03/05/23/14/girl-2120196_1280.jpg' ,islike:false },
    {id:3, name: '김지석', job: '백엔드', tel: '010-8923-9188', imgUrl: 'https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_1280.jpg' ,islike:false },
    {id:4, name: '강연정', job: '영업팀', tel: '010-3792-9873', imgUrl: 'https://cdn.pixabay.com/photo/2015/01/12/10/44/woman-597173_1280.jpg' ,islike:false },
    {id:5, name: '최지혜', job: '백엔드', tel: '010-1892-0912', imgUrl: 'https://cdn.pixabay.com/photo/2016/06/19/12/46/woman-1466628_1280.jpg' ,islike:false },
    {id:6, name: '강동우', job: '프론트엔드', tel: '010-8211-0997', imgUrl: 'https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869_1280.jpg' ,islike:false },
    {id:7, name: '정예진', job: '디자이너', tel: '010-9098-0912', imgUrl: 'https://cdn.pixabay.com/photo/2018/04/05/09/32/portrait-3292287_1280.jpg' ,islike:false },
]

// localStorage.setItem("obj",JSON.stringify(obj))

const init=()=>{
    let isfirst = JSON.parse(localStorage.getItem("isfirst")) || false;
    if(!isfirst)
    {
        localStorage.setItem("obj",JSON.stringify(obj))
        localStorage.setItem("isfirst",JSON.stringify(true))
    }
}
//obj추가
const add = () =>{
    let obj = JSON.parse(localStorage.getItem("obj")) || [];
    let num = 0;
            if(obj.length !== 0){
                num = obj[obj.length-1].id
            }
    num++;
    localStorage.setItem("num",JSON.stringify(num));
    num = JSON.parse(localStorage.getItem("num"));
    obj = [
        ...obj, 
        {id:num, name: userName.value, job: userJob.value, tel: userTel.value, imgUrl: userImg.value, islike:false},
    ]
    localStorage.setItem("obj",JSON.stringify(obj));
}

//퇴사버튼
const resiBtn =(resignBtn, id) =>{
    resignBtn.addEventListener('click',e=>{
        let obj = JSON.parse(localStorage.getItem("obj"));
        obj = obj.filter(item => item.id !== id);
        localStorage.setItem("obj", JSON.stringify(obj));
        showtxt();
    })
}



// 하트 선택
const heart = (i, id) =>{
    i.addEventListener('click',e=>{
        let obj = JSON.parse(localStorage.getItem("obj"));
        const checkItem = obj.filter(item => item.id === id);
        checkItem[0].islike = !checkItem[0].islike;
        localStorage.setItem("obj", JSON.stringify(obj));
        showtxt();
    })
}
//초기생성
const showtxt =()=> {
    init();
    let obj = JSON.parse(localStorage.getItem("obj")) || [];
    listbox.innerHTML='';
    obj.forEach(ele=>{
        const{id, name, job, tel, imgUrl, islike} = ele;
        let li = document.createElement('li');
        let pic = document.createElement('div');
        let img = document.createElement('img');
        let txt = document.createElement('div');
        let strong = document.createElement('strong');
        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
        let likeWrap = document.createElement('div');
        let i = document.createElement('i');
        let resignBtn = document.createElement('button');
        pic.setAttribute('class','pic');
        txt.setAttribute('class','txt');
        likeWrap.setAttribute('class','likeWrap');
        resignBtn.setAttribute('class','resignBtn');
        img.setAttribute('src', imgUrl);
        strong.textContent = name;
        span1.textContent = job;
        span2.textContent = tel;
        resignBtn.textContent = '퇴사';
    
        if(islike){
            i.setAttribute('class','xi-heart');
        }else{
            i.setAttribute('class','xi-heart-o');
        }

        pic.append(img);
        txt.append(strong,span1,span2);
        likeWrap.append(i, resignBtn);
        li.append(pic,txt,likeWrap);
        listbox.append(li);
        resiBtn(resignBtn, id);
        heart(i, id);
    })
}

//명단삭제버튼
btnDel.addEventListener('click',e=>{
    let obj = JSON.parse(localStorage.getItem("obj"));
    obj = obj.filter(item => item.id===obj.id);
    localStorage.setItem("obj", JSON.stringify(obj));
    showtxt();
})

//직원명단 숨기기&보이기 버튼
btnShow.addEventListener('click',e=>{
    if(isshow){
        listbox.style.display="none"
        btnShow.textContent='명단 보이기'
    }else{
        listbox.style.display="block"
        btnShow.textContent='명단 숨기기'
    }
    isshow = !isshow
})

//명단추가 숨기기 버튼
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

form.addEventListener('submit', e => {
    e.preventDefault();
    add();
    showtxt();
    userName.value='';
    userJob.value='';
    userTel.value='';
    userImg.value='';
})

showtxt();
