import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from "./navSlice"

export const store = configureStore({
  reducer: {
navbar: navbarReducer,
  },
})