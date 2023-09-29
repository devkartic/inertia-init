import { Link } from '@inertiajs/react';
import CustomComponent from "@/Admin/Components/CustomComponent.jsx";

export default function Header({user}) {
    return (
        <>
            <div className="container-fluid bg-info">
                <div className="row">
                    <div className="col-md-2 bg-primary d-flex align-items-center">
                        <div className="d-inline-flex p-2 fs-4 fw-bold">E-Shop Admin</div>
                    </div>
                    <div className="col-md-10">
                        <div className="container-fluid bg-info">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
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
                    </div>
                </div>
            </div>
        </>
    );
}
