import {configureStore} from "@reduxjs/toolkit"
import staff from './modules/staffSlice'
import authority from './modules/authoritySlice'
export const store = configureStore({
    reducer:{
        staff,
        authority
    }
})