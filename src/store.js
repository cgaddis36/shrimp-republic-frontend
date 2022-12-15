import { configureStore } from "@reduxjs/toolkit"
import userReducer from './components/reducers/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})