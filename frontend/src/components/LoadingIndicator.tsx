// Einheitliche Ladeanzeige, z. B. während Daten vom Backend geladen werden
interface LoadingIndicatorProps {
    message?: string
}

function LoadingIndicator({ message = 'Loading...' }: LoadingIndicatorProps) {
    return <p role="status">{message}</p>
}

export default LoadingIndicator