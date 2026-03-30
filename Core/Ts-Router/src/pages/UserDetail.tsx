import { useParams } from "react-router-dom";
import type { UserDetailParams } from "../router/types";

const UserDetail = () => {
    const params = useParams() as UserDetailParams

    return (
        <div>
            <h1>用户详情 </h1>
            < p > 用户ID: {params.id} </p>
        </div>
    )
}

export default UserDetail