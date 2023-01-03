import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type User ={
    id: number,
    name: string
}
type initialState ={
    loading: boolean,
    users: User[],
    error: string
}

const initialState : initialState = {
  loading: false,
  users: [],
  error: ''
}

export const fetchUsers = createAsyncThunk('users/fetch', ()=>{
   return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
})
const userSlice = createSlice({
name: 'user',
initialState,
reducers: {},
extraReducers: builder =>{
    builder.addCase(fetchUsers.pending, (state) => {

        state.loading = true

    }),
    builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<User[]>) => {
    
        state.users = action.payload
        state.loading = false,
        state.error = ''

    }),
    builder.addCase(fetchUsers.rejected, (state, action) => { 

        state.users = [],
        state.loading = false,
        state.error = action.error.message || 'Something went wrong'

    })
}
})
export default userSlice.reducer

