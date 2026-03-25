import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Todo, TodosState, TodoStatus } from './todoTypes';

const initialState: TodosState = {
    items: []
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
    }
})

export const { addTodos, deleteTodos, updateStatus } = todoSlice.actions
export default todoSlice.reducer