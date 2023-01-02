const createSlice = require('@reduxjs/toolkit').createSlice
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

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
