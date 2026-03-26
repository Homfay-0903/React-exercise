import { configureStore, combineSlices } from '@reduxjs/toolkit';
import todoReducer from './todos/todoSlice';
import userSlice from './users/userSlice';
import orderSlice from './orders/orderSlice';

const rootReducer = combineSlices(
    userSlice,
    orderSlice,
    { todos: todoReducer }
)

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch