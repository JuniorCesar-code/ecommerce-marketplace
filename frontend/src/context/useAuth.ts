import { createContext, useContext } from 'react'

// What our shared board holds
export interface AuthContextType {
    token: string | null
    login: (token: string) => void
    logout: () => void
}

// The shared board itself (empty until AuthProvider fills it)
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Shortcut so any page can read the board easily
export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used inside AuthProvider')
    }
    return context
}