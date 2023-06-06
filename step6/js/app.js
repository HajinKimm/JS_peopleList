;(()=>{
    const get = target => {
        if (document.querySelector(target)) {
            return document.querySelector(target);
        } else {
            throw 'ERROR - get';
        }
    };
    const getAll = target => {
        if (document.querySelectorAll(target)) {
            return document.querySelectorAll(target);
        } else {
            throw 'ERROR - get';
        }
    };

    const btnShow = get('.btnShow');
    const btnDel = get('.btnDel');
    const addshowBtn = get('.addshowBtn');
    const form = get('form');
    const userName = get('#userName');
    const userJob = get('#userJob');
    const userTel = get('#userTel');
    const userImg = get('#userImg');
    const addWrap = get('.addWrap');
    const listbox = get('.list');

    let isshow=true;
    let isadd=true;
    let obj = [
        {id:1, name: '이진솔', job: '웹퍼블리셔', tel: '010-2739-1928', imgUrl: 'https://cdn.pixabay.com/photo/2016/01/18/05/09/woman-1146038_1280.jpg',islike:false },
        {id:2, name: '박예린', job: 'MD', tel: '010-8932-3872', imgUrl: 'https://cdn.pixabay.com/photo/2017/03/05/23/14/girl-2120196_1280.jpg' ,islike:false },
        {id:3, name: '김지석', job: '백엔드', tel: '010-8923-9188', imgUrl: 'https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_1280.jpg' ,islike:false },
        {id:4, name: '강연정', job: '영업팀', tel: '010-3792-9873', imgUrl: 'https://cdn.pixabay.com/photo/2015/01/12/10/44/woman-597173_1280.jpg' ,islike:false },
        {id:5, name: '최지혜', job: '백엔드', tel: '010-1892-0912', imgUrl: 'https://cdn.pixabay.com/photo/2016/06/19/12/46/woman-1466628_1280.jpg' ,islike:false },
        {id:6, name: '강동우', job: '프론트엔드', tel: '010-8211-0997', imgUrl: 'https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869_1280.jpg' ,islike:false },
        {id:7, name: '정예진', job: '디자이너', tel: '010-9098-0912', imgUrl: 'https://cdn.pixabay.com/photo/2018/04/05/09/32/portrait-3292287_1280.jpg' ,islike:false },
    ]

    class Staff{
        constructor(uName, uJob, uTel, uImg){
            this.uName = uName
            this.uJob =uJob
            this.uTel = uTel
            this.uImg = uImg
        }
    }

    class StaffUI{

        //처음 로컬 실행시 초기 1번 obj데이터 실행
        static first(){
        // localStorage.clear(); 
        let isfirst = JSON.parse(localStorage.getItem("isfirst")) || false;
        if(!isfirst){
                console.log(isfirst)
                localStorage.setItem("obj",JSON.stringify(obj))
                localStorage.setItem("isfirst",JSON.stringify(true))
            }
        }

        //명단추가
        static add (item){
            const {uName, uJob, uTel, uImg} = item
            let num = 0;
            if(obj.length !== 0){
                num = obj[obj.length-1].id
            }
            num++;
            localStorage.setItem("num",JSON.stringify(num));
            num = JSON.parse(localStorage.getItem("num"));
            obj = [
                ...obj, 
                {id:num, name: uName, job: uJob, tel: uTel, imgUrl: uImg, islike:false},
            ]
            localStorage.setItem("obj",JSON.stringify(obj));
        }

        //초기생성
        static showtxt(item) {
           
            const{id, name, job, tel, imgUrl, islike} = item;
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
            
            StaffUI.resiBtn(resignBtn, id);
            StaffUI.heart(i, id);
            StaffUI.reset();
        }

        //퇴사버튼
        static resiBtn(resignBtn, id){
            resignBtn.addEventListener('click',e=>{
                obj = obj.filter(item => item.id !== id);
                localStorage.setItem("obj", JSON.stringify(obj));
                LocalData.showData();
            })
        }

        // 하트 선택
        static heart(i, id){
            i.addEventListener('click',e=>{
                const checkItem = obj.filter(item => item.id === id);
                checkItem[0].islike = !checkItem[0].islike;
                localStorage.setItem("obj", JSON.stringify(obj));
                LocalData.showData();
            })
        }

        //텍스트지우기
        static reset(){
            userName.value='';
            userJob.value='';
            userTel.value='';
            userImg.value='';
        }
    }

    class LocalData{
        static getData(){
            obj = JSON.parse(localStorage.getItem("obj")) || [];
        }

        //값 출력
        static showData(){
            obj = JSON.parse(localStorage.getItem("obj")) || [];
            listbox.innerHTML='';

            obj.map(item=>{
                StaffUI.showtxt(item);
            })
        }
    }

    //화면에 출력
    StaffUI.first();
    LocalData.getData();
    LocalData.showData();
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
    
    //명단삭제버튼
    btnDel.addEventListener('click',e=>{
        console.log('전체삭제')
        obj = obj.filter(item => item.id===obj.id);
        localStorage.setItem("obj", JSON.stringify(obj));
        LocalData.showData();
    })

}) ();