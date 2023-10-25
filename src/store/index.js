import { configureStore } from '@reduxjs/toolkit'
import { pushNoteApi } from './pushNoteApi'
import taskReducer from '@/store/taskSlice'

export const store = configureStore({
  reducer: {
    [pushNoteApi.reducerPath]: pushNoteApi.reducer,
    task: taskReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pushNoteApi.middleware),
})

