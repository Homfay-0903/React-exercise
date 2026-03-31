import { useLoaderData } from "react-router-dom";
import type { User } from "../router/types";

const UserDetail = () => {
    const { user } = useLoaderData() as { user: User }

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