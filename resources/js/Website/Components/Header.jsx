import { Link } from '@inertiajs/react';

export default function Header({auth}) {
    return (
        <>
            <div className="container-fluid bg-info">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerWebsiteTop" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand fw-bold fs-2 text-primary" href={route('login')}>E-Shop</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerWebsiteTop">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href={route('login')}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href={route('login')}>Link</Link>
                                </li>
                            </ul>
                            <div className="d-flex me-3">
                                {auth.user ? (
                                    <Link className="btn btn-outline-primary me-2" href={route('dashboard')}>Dashboard</Link>
                                ) : (
                                    <>
                                        <Link className="btn btn-outline-primary me-2" href={route('login')}>Login</Link>
                                        <Link className="btn btn-outline-primary" href={route('register')}>Register</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
