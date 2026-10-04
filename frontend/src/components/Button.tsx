import type { ButtonHTMLAttributes } from 'react'
import './Button.css'

// Einheitlicher Button für die ganze App (z. B. "In den Warenkorb", "Login").
// Nimmt alle normalen <button>-Eigenschaften an (onClick, disabled, ...).
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
}

function Button({ variant = 'primary', type = 'button', ...rest }: ButtonProps) {
    return <button type={type} className={`btn btn-${variant}`} {...rest} />
}

export default Button