
import { ordered as cakeOrdered} from '../cake/cakeSlice'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfIcecream: 20,
}

const icecreamSlice = createSlice({

    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIcecream = state.numOfIcecream - 1
        },
        restocked:(state, action)=>{
            state.numOfIcecream = state.numOfIcecream + action.payload
        },

    },
    
    // extraReducers:{
    //     ['cake/ordered']:(state)=>{
    //         state.numOfIcecream = state.numOfIcecream - 1
    //     }   
    // }
    extraReducers: (builder) =>{

        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecream --   
        })

    }

})

export default icecreamSlice.reducer
export const {
    ordered,
    restocked
} = icecreamSlice.actions

