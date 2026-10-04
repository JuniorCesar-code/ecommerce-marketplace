// Einheitliche Fehlermeldung, z. B. wenn das Backend nicht erreichbar ist
interface ErrorMessageProps {
    message?: string
    onRetry?: () => void
}

function ErrorMessage({ message = 'Something went wrong.', onRetry }: ErrorMessageProps) {
    return (
        <div role="alert">
            <p>{message}</p>
            {onRetry && (
                <button type="button" onClick={onRetry}>
                    Try again
                </button>
            )}
        </div>
    )
}

export default ErrorMessage