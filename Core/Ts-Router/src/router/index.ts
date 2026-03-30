import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import type { AppRouteConfig } from "./types";
import App from "../App";

const Login = lazy(() => import('../pages/Login'))
const Home = lazy(() => import('../pages/Home'));
const UserDetail = lazy(() => import('../pages/UserDetail'))

const routes: AppRouteConfig[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: '首页' }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { title: '登录' }
    },
    {
        path: '/user/:id',
        name: 'UserDetail',
        component: UserDetail,
        loader: async ({ params }) => {
            // 这里可以添加数据获取逻辑
            return { user: { id: params.id, name: '测试用户' } }
        },
        meta: { title: '用户详情', requiresAuth: true }
    }
]

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: routes.map(route => ({
            path: route.path,
            Component: route.component,
            loader: route.loader,
            meta: route.meta
        }))
    }
])

export default router