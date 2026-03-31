import { useNavigate } from 'react-router-dom';
import type { UserDetailParams, User } from '../router/types';

// 定义路由名称类型
type RouteName =
    | 'Home'
    | 'Login'
    | 'UserList'
    | 'UserDetail'
    | 'NotFound'

// 定义参数类型映射
interface RouteParams {
    Home: undefined
    Login: undefined
    UserList: undefined
    UserDetail: UserDetailParams
    NotFound: undefined
}

// 封装导航函数
export const useNavigateWithTypes = () => {
    const navigate = useNavigate()

    return {
        navigate: <K extends RouteName>(
            name: K,
            params?: RouteParams[K],
            options?: { replace?: boolean, state?: { user: User } }
        ) => {
            let path = ''

            // 根据路由名称构建路径
            switch (name) {
                case 'Home':
                    path = '/'
                    break
                case 'Login':
                    path = '/login'
                    break
                case 'UserList':
                    path = '/users'
                    break
                case 'UserDetail':
                    path = `/user/${params?.id}`
                    break
                case 'NotFound':
                    path = '*'
                    break
            }

            navigate(path, options)
        },
        back: () => navigate(-1)
    }
}