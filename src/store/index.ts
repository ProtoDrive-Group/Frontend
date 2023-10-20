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

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

