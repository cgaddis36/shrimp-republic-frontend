import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
  user: '',
  loading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setLoading: (state, action) => {
      state.active = action.payload
    }
  }
})

export const { setUser } = userSlice.actions 
export const { setLoading } = userSlice.actions 


export const selectUser = (state) => state.user.user 
export const selectLoading = (state) => state.user.loading
export default userSlice.reducer