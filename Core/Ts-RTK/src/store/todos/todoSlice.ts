import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Todo, TodosState, TodoStatus } from './todoTypes';
import { fetchTodosThunk } from './todoThunks';

interface TodosStateWithAsync extends TodosState {
    loading: boolean
    error: string | null
    total: number
}

const initialState: TodosStateWithAsync = {
    items: [],
    loading: false,
    error: null,
    total: 0
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodos: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: crypto.randomUUID(),
                content: action.payload,
                status: 'pending'
            }

            state.items.push(newTodo)
        },

        deleteTodos: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },

        updateStatus: (state, action: PayloadAction<{ id: string, status: TodoStatus }>) => {
            const { id, status } = action.payload
            const todo = state.items.find(item => item.id === id)

            if (todo) {
                todo.status = status
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodosThunk.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTodosThunk.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload.data
                state.total = action.payload.total
            })
            .addCase(fetchTodosThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? 'unknown error'
            })
    }
})

export const { addTodos, deleteTodos, updateStatus } = todoSlice.actions
export default todoSlice.reducer