import { Link } from '@inertiajs/react';
import CustomComponent from "@/Admin/Components/CustomComponent.jsx";
import Sidebar from "@/Admin/Components/Sidebar.jsx";


export default function Header({user}) {
    return (
        <>
            <div className="container-fluid bg-info">
                <div className="row">
                    <div className="col-lg-2 col-md-3 bg-primary d-flex align-items-center py-2">
                        <div className="d-inline-flex p-2 fs-4 fw-bold  d-none d-lg-block d-md-block">E-Shop Admin</div>
                        <button className="btn btn-light d-block d-lg-none d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAdminSidebar" aria-controls="offcanvasAdminSidebar">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <Sidebar/>
                    </div>
                    <div className="col-lg-10 col-md-9">
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
