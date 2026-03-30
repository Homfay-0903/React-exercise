// src/components/ProtectedRoute.tsx
import { Navigate, useLocation } from 'react-router-dom';
import type { AppRouteMeta } from '../router/types';

interface ProtectedRouteProps {
    component: React.ComponentType
    meta: AppRouteMeta
}

const ProtectedRoute = ({ component: Component, meta }: ProtectedRouteProps) => {
    const location = useLocation()
    //console.log(location)
    const isLoggedIn = !!localStorage.getItem('token')

    if (meta.requiresAuth && !isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return <Component />
}

export default ProtectedRoute