import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = async () => {
        await new Promise(resolved => setTimeout(resolved, 2000))

        localStorage.setItem('token', '1234')

        const from = location.state?.from?.pathname || '/'
        navigate(from, { replace: true })
    }


    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login