import { useState, type FormEvent } from 'react'
import { registerUser } from '../api/authApi'

function RegisterPage() {
    // Form values
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Error message
    const [error, setError] = useState('')

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setError('')

        if (!firstName.trim() || !lastName.trim()) {
            setError('First name and last name are required.')
            return
        }

        if (!email.trim()) {
            setError('Email is required.')
            return
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters.')
            return
        }

        try {
            const response = await registerUser({
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email: email.trim(),
                password,
            })

            console.log('Registration successful:', response)
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            } else {
                setError('Registration failed.')
            }
        }
    }
    return (
        <div>
            <h1>Create Account</h1>
            <p>Register for your Marketplace account.</p>

            {/* Show validation error */}
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="firstName">
                        First Name
                    </label>

                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(event) =>
                            setFirstName(event.target.value)
                        }
                    />
                </div>

                <div>
                    <label htmlFor="lastName">
                        Last Name
                    </label>

                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(event) =>
                            setLastName(event.target.value)
                        }
                    />
                </div>

                <div>
                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        }
                    />
                </div>

                <div>
                    <label htmlFor="password">
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(event) =>
                            setPassword(event.target.value)
                        }
                    />
                </div>

                <button type="submit">
                    Create Account
                </button>

            </form>
        </div>
    )
}

export default RegisterPage