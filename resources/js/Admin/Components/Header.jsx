import { Link } from '@inertiajs/react';
import CustomComponent from "@/Admin/Components/CustomComponent.jsx";

export default function Header({user}) {
    return (
        <>
            <div className="container-fluid bg-info">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerAdminTop" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand fw-bold fs-2 text-primary" href={route('login')}>E-Shop Admin</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerAdminTop">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href={route('dashboard')}>Dashboard</Link>
                                </li>
                            </ul>
                            <div className="d-flex me-3">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <Link className="btn btn-sm dropdown-toggle px-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user.name}
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" href={route('profile.edit')}>Profile</Link></li>
                                            <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><CustomComponent.Link className="dropdown-item" href={route('logout')} method="post">Logout</CustomComponent.Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
