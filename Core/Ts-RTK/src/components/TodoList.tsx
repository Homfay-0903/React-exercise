import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { addTodos, deleteTodos, updateStatus } from '../store/todos/todoSlice';
import type { TodoStatus } from '../store/todos/todoTypes';

const TodoList = () => {
    const todos = useSelector((state: RootState) => state.todos.items)
    const dispatch = useDispatch<AppDispatch>()

    const handleAdd = () => {
        const content = prompt('please input here')

        if (content) {
            dispatch(addTodos(content))
        }
    }

    const handleStatusChange = (id: string, status: TodoStatus) => {
        dispatch(updateStatus({ id, status }))
    }

    return (
        <div>
            <button onClick={handleAdd}>ADD</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.content}, status is {todo.status}</span>
                        <select
                            value={todo.status}
                            onChange={(e) => handleStatusChange(todo.id, e.target.value as TodoStatus)}
                        >
                            <option value="pending">Pending</option>
                            <option value="doing">Doing</option>
                            <option value="completed">Completed</option>
                        </select>
                        <button onClick={() => dispatch(deleteTodos(todo.id))}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList