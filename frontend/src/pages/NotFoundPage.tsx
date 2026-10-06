import { Link } from 'react-router-dom'

// Wird angezeigt, wenn keine Route zur aufgerufenen Adresse passt
function NotFoundPage() {
    return (
        <>
            <h2>Page not found</h2>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Back to home</Link>
        </>
    )
}

export default NotFoundPage