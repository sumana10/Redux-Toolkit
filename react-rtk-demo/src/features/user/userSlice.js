import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
  loading: false,
  users: [],
  error: ''
}

export const fetchUsers = createAsyncThunk('users/fetch', ()=>{
   return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data.map((user)=>user.id))
})
const userSlice = createSlice({
name: 'user',
initialState,
extraReducers: builder =>{
    builder.addCase(fetchUsers.pending, (state) => {

        state.loading = true

    }),
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
    
        state.users = action.payload
        state.loading = false,
        state.error = ''

    }),
    builder.addCase(fetchUsers.rejected, (state, action) => { 

        state.loading = false,
        state.error = action.error.message
    })
}
})
export default userSlice.reducer

