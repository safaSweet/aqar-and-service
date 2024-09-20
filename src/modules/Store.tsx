import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from '../features/theme/ThemeSlice';
import Selling from './Pages/properties/selling_rentting/Store'
export const store = configureStore({
  reducer: {
    darkTheme: ThemeSlice,
    Selling: Selling,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch