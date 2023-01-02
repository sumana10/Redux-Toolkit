import { createSlice } from '@reduxjs/toolkit'
//we are into nodejs environment not in react app so we need to use require syntax

const initialState = {
    numOfCakes: 10
}


const cakeSlice = createSlice({
   name: 'cake',
   initialState,
   reducers:{
    ordered: (state)=>{
        state.numOfCakes = state.numOfCakes - 1
   },
   restocked: (state, action)=>{
    state.numOfCakes += action.payload
   },
}
})
export default cakeSlice.reducer
export const {
    ordered,
    restocked
} = cakeSlice.actions
