export type TodoStatus = 'pending' | 'doing' | 'completed'

export interface Todo {
    id: string;
    content: string;
    status: TodoStatus;
}

export interface TodosState {
    items: Todo[];
}