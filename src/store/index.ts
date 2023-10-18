import { configureStore } from '@reduxjs/toolkit'
import { pushNoteApi } from './pushNoteApi'

export const store = configureStore({
  reducer: {
    [pushNoteApi.reducerPath]: pushNoteApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pushNoteApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

