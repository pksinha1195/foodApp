import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from './restaurantSlice'
import cartReducer from "./cartSlice"
import userReducer from "./userSlice"

export const store = configureStore({
    reducer: {
      restaurants:restaurantReducer,
      cart:cartReducer,
      users:userReducer,
    },
  })