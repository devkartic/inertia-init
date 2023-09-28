import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestL({ children }) {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row justify-content-center py-3 py-md-5">
                    <div className="col-md-4 my-3 pb-5 rounded">
                        <div className="h2 text-center my-3"><span className="text-primary">E-Shop</span> Login</div>
                        <div className="card shadow border-0 p-5">
                            <div className="card-body">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
