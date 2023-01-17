import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'views/features/counter/counterSlice'
import taskReducer from 'views/features/tasks/task.slice';
import postReduer from 'views/pages/posts/post.slice'
import authReducer from 'views/pages/auth/auth.slice'
export const store = configureStore({
  reducer: {
    shomarande : counterReducer,
    taskList : taskReducer,
    posts : postReduer,
    auth : authReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch