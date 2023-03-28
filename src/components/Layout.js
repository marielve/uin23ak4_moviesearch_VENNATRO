import { Link, Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <div>
            <header>
                <h1>FILMSØK</h1>
                <nav>

                </nav>
            </header>

            <main>
                <Outlet />
            </main>
            <footer>
                <span>Mariel Vennatro</span>
            </footer>
        </div>
    )
}