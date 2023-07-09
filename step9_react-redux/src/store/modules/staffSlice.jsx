import {createSlice} from '@reduxjs/toolkit'
const initialState = localStorage.getItem('staffData')
    ? JSON.parse(localStorage.getItem('staffData')) 
    : { no: 8,
        data: [
            {id:1, name: '이진솔', job: '웹퍼블리셔', tel: '010-2739-1928', imgUrl: 'https://cdn.pixabay.com/photo/2016/01/18/05/09/woman-1146038_1280.jpg',islike:true },
            {id:2, name: '박예린', job: 'MD', tel: '010-8932-3872', imgUrl: 'https://cdn.pixabay.com/photo/2017/03/05/23/14/girl-2120196_1280.jpg' ,islike:false },
            {id:3, name: '김지석', job: '백엔드', tel: '010-8923-9188', imgUrl: 'https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_1280.jpg' ,islike:false },
            {id:4, name: '강연정', job: '영업팀', tel: '010-3792-9873', imgUrl: 'https://cdn.pixabay.com/photo/2015/01/12/10/44/woman-597173_1280.jpg' ,islike:true },
            {id:5, name: '최지혜', job: '백엔드', tel: '010-1892-0912', imgUrl: 'https://cdn.pixabay.com/photo/2016/06/19/12/46/woman-1466628_1280.jpg' ,islike:false },
            {id:6, name: '강동우', job: '프론트엔드', tel: '010-8211-0997', imgUrl: 'https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869_1280.jpg' ,islike:true },
            {id:7, name: '정예진', job: '디자이너', tel: '010-9098-0912', imgUrl: 'https://cdn.pixabay.com/photo/2018/04/05/09/32/portrait-3292287_1280.jpg' ,islike:false },
        ]
    }



const staffSlice = createSlice({
    name:'staff',
    initialState,
    reducers:{
        addStaff(state, action){
            state.data = [...state.data, {...action.payload, id:state.no++}]
            localStorage.setItem('staffData', JSON.stringify(state))
        },
        heartSelect(state,action){
            console.log(state.data)
            state.data = state.data.map(item=>item.id===action.payload?{...item, islike:!item.islike}:item)
            localStorage.setItem('staffData', JSON.stringify(state))
        },
        removeStaff(state, action){
            state.data = state.data.filter(item=>item.id !== action.payload)
            localStorage.setItem('staffData', JSON.stringify(state))
        },
        allRemoverStaff(state, adtion){
            state.data = []
            state.no = 0
            localStorage.setItem('staffData', JSON.stringify(state))
        }
    }
})

export const {addStaff, heartSelect, removeStaff, allRemoverStaff} = staffSlice.actions
export default staffSlice.reducer