import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from '../store/store';
import { login, logout } from "../store/users/userSlice";
import { increment } from "../store/orders/orderSlice";

const DashBoard = () => {
    const user = useSelector((state: RootState) => state.user)
    const order = useSelector((state: RootState) => state.order)
    const dispatch = useDispatch<AppDispatch>()

    const handleLogin = () => {
        dispatch(login())
    }

    const handleLogOut = () => {
        dispatch(logout())
    }

    return (
        <div>
            <p>
                <button onClick={handleLogin}>login</button>
                <button onClick={handleLogOut}>logout</button>
                <button onClick={() => dispatch(increment())}>+++</button>
            </p>
            <p>user is {user.name}, now is {user.isLogin ? 'login' : 'logout'}</p>
            <p>user count is {order.orderCount}</p>
        </div>
    )
}

export default DashBoard