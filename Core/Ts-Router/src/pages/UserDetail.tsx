import { useLoaderData, useLocation } from "react-router-dom";
import type { User } from "../router/types";

const UserDetail = () => {
    const location = useLocation()
    const stateUser = location.state?.user as User | undefined
    //const { user: loaderUser } = useLoaderData() as { user: User }

    //const user = stateUser || loaderUser
    const user = stateUser as User

    return (
        <div>
            <h1>用户详情 </h1>
            < p > 用户ID: {user.id} </p>
            < p > 用户名: {user.name} </p>
            < p > 邮箱: {user.email} </p>
        </div>
    )
}

export default UserDetail