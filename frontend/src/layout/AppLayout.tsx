import type { ReactNode } from 'react'

interface AppLayoutProps {
    children: ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
    return (
        <div>
            <header>
                <h1>E-Commerce Marketplace</h1>
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