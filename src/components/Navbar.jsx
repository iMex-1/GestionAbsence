import { Link } from 'react-router-dom';

function AppNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark medieval-navbar mb-4">
            <div className="container">
                <Link className="navbar-brand" to="/">Ye Olde Stagiaires Guild</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/stagiaires">Apprentices</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/absences">Absences</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default AppNavbar;
