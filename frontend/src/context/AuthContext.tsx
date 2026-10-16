import { useState } from 'react'
import type { ReactNode } from 'react'
import { AuthContext } from './useAuth'

// Shared board that holds the token and survives page reloads
export function AuthProvider({ children }: { children: ReactNode }) {
    // start from the token saved in the browser drawer (if any)
    const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'))

    // save the token on the board AND in the browser drawer
    function login(newToken: string) {
        localStorage.setItem('token', newToken)
        setToken(newToken)
    }

    // clear the token from the board AND the browser drawer
    function logout() {
        localStorage.removeItem('token')
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}