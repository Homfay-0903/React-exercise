import { useNavigateWithTypes } from '../hooks/useNavigateWithTypes';
import type { User } from '../router/types';

const UserList = () => {
    const { navigate } = useNavigateWithTypes()

    const users: User[] = [
        { id: '1', name: '用户1', email: 'user1@example.com' },
        { id: '2', name: '用户2', email: 'user2@example.com' },
    ]

    return (
        <div>
            <h1>用户列表</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                        <span>
                            <button onClick={() => navigate('UserDetail', { id: user.id }, { state: { user } })}>
                                详情
                            </button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList