import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    staffathority: localStorage.getItem('userLog')
        ? JSON.parse(localStorage.getItem('userLog')) :null
}
const authoritySlice = createSlice({
    name:'staffathority',
    initialState,
    reducers:{
        login(state, action){
            const {email, password} = action.payload
            const userLog = {
                email
            }
            if(password === '1234'){
                state.staffathority = {email, password}
                localStorage.setItem('userLog', JSON.stringify(userLog))
            }
        },
        logout(state, action){
            state.staffathority = null
            localStorage.removeItem('userLog')
        }
    }
})

export const {login, logout} = authoritySlice.actions
export default authoritySlice.reducer