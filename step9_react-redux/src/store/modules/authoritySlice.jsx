import {createSlice} from '@reduxjs/toolkit'

const initialState = localStorage.getItem('staffthority')
    ? JSON.parse(localStorage.getItem('staffthority')) 
    : { staffthority: [] }

const authoritySlice = createSlice({
    name:'staffthority',
    initialState,
    reducers:{
        login(state, action){
            if(action.payload.password === '1234'){
                state.staffthority = {...action.payload}
                localStorage.setItem('staffthority', JSON.stringify(state.staffthority))
                console.log(state.staffthority)
            }
            console.log(state.staffthority)
        },
        logout(state, action){
            console.log(state)
            // state.staffthority = []
            // localStorage.setItem('staffthority', JSON.stringify(state.staffthority))
        }
    }
})

export const {login, logout} = authoritySlice.actions
export default authoritySlice.reducer