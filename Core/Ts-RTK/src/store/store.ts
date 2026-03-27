import { configureStore, combineSlices } from '@reduxjs/toolkit';
import todoReducer from './todos/todoSlice';
import userSlice from './users/userSlice';
import orderSlice from './orders/orderSlice';
import { productApi } from '../services/productApi';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineSlices(
    userSlice,
    orderSlice,
    { todos: todoReducer },
    { [productApi.reducerPath]: productApi.reducer }
)

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch