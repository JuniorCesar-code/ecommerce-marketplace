import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useAuth } from '../context/AuthContext'

// Guard: logged-in users pass through, others are sent to /login
function ProtectedRoute({ children }: { children: ReactNode }) {
    const { token } = useAuth()   // read the token from the shared board

    // No token -> not logged in -> redirect to login
    if (!token) {
        return <Navigate to="/login" replace />
    }

    // Token exists -> show the protected page
    return children
}

export default ProtectedRoute