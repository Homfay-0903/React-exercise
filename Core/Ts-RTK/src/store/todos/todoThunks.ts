import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Todo } from "./todoTypes";

interface FetchTodosParams {
    page: number
    limit: number
    filter?: 'all' | 'actived'
}

export interface FetchTodosResponse {
    data: Todo[]
    total: number
}

const mockFetchApi = async (_params: FetchTodosParams): Promise<FetchTodosResponse> => {
    await new Promise(reslove => setTimeout(reslove, 1000))

    return {
        data: [
            { id: '1', content: 'Learn React 19', status: 'completed' },
            { id: '2', content: 'Master RTK', status: 'doing' }
        ],
        total: 2
    }
}

export const fetchTodosThunk = createAsyncThunk<
    FetchTodosResponse,
    FetchTodosParams,
    { rejectValue: string }
>(
    'todos/fetchTodos',
    async (params, { rejectWithValue }) => {
        try {
            const response = await mockFetchApi(params)
            return response
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to fetch')
        }
    }
)