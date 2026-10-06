import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface AppLayoutProps {
    children: ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
    return (
        <div>
            <header>
                <h1>E-Commerce Marketplace</h1>

                {/* Hauptnavigation – neue Seiten hier als NavLink ergänzen */}
                <nav>
                    <NavLink to="/">Home</NavLink>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <p>© 2026 E-Commerce Marketplace</p>
            </footer>
        </div>
    )
}

export default AppLayout