import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../api/authApi'
import { useAuth } from '../context/useAuth'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { login } = useAuth()        // the "login" action from the shared board
    const navigate = useNavigate()     // lets us move the user to another page

    // Send the credentials to the backend; on success save the token and go home
    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setError('')
        try {
            const response = await loginUser({ email, password })
            login(response.token)   // pin the token on the board
            navigate('/')           // go to the home page
        } catch {
            setError('E-Mail oder Passwort ist falsch')
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="E-Mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Passwort"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Einloggen</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default LoginPage