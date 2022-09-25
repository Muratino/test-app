import { configureStore } from '@reduxjs/toolkit'
import fethAllLmg from './Slice/fethData'

export const store = configureStore({
  reducer: {
    fethAllLmg,
  },
})
