import { createBrowserRouter } from "react-router-dom";
//import { lazy } from "react";
import { lazyLoad } from './lazy';
import type { AppRouteConfig } from "./types";
import ProtectedRoute from "../components/ProtectedRoute";
import App from "../App";

//const Login = lazy(() => import('../pages/Login'));
//const Home = lazy(() => import('../pages/Home'));
//const UserDetail = lazy(() => import('../pages/UserDetail'));
//const UserList = lazy(() => import('../pages/UserList'))

const routes: AppRouteConfig[] = [
    {
        path: 'home',
        name: 'Home',
        component: lazyLoad(() => import('../pages/Home')),
        meta: { title: '首页', requiresAuth: true }
    },
    {
        path: 'login',
        name: 'Login',
        component: lazyLoad(() => import('../pages/Login')),
        meta: { title: '登录' }
    },
    {
        path: '/users',
        name: 'UserList',
        component: lazyLoad(() => import('../pages/UserList')),
        meta: { title: '用户列表', requiresAuth: true }
    },
    {
        path: 'user/:id',
        name: 'UserDetail',
        component: lazyLoad(() => import('../pages/UserDetail')),
        loader: async ({ params }) => {
            return { user: { id: params.id, name: '测试用户' } };
        },
        meta: { title: '用户详情', requiresAuth: true }
    }
];

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: routes.map(route => ({
            path: route.path,
            element: <ProtectedRoute component={route.component} meta={route.meta!} />,
            loader: route.loader,
            meta: route.meta
        }))
    }
]);

export default router;
