import type {
    LoaderFunction,
    ActionFunction,
    Params
} from 'react-router-dom';

export interface AppRouteMeta {
    title: string,
    requiresAuth?: boolean
}

export interface AppRouteConfig {
    path: string
    name: string
    component: React.ComponentType
    loader?: LoaderFunction
    action?: ActionFunction
    meta?: AppRouteMeta
    children?: AppRouteConfig[]
}

export interface UserDetailParams extends Params {
    id: string
}