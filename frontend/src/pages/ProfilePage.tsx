import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// Protected page: only visible to logged-in users
function ProfilePage() {
    const { logout } = useAuth()     // the "logout" action from the shared board
    const navigate = useNavigate()

    // Clear the token and send the user back to the login page
    function handleLogout() {
        logout()
        navigate('/login')
    }

    return (
        <div>
            <h1>Mein Profil</h1>
            <p>Du bist eingeloggt.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default ProfilePage