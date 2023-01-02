const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

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

        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIcecream --   
        })

    }

})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions
