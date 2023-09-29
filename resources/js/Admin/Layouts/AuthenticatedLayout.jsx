import {Link} from '@inertiajs/react';
import CustomComponent from "@/Admin/Components/CustomComponent.jsx";
import Header from "@/Admin/Components/Header.jsx";
import Footer from "@/Admin/Components/Footer.jsx";

export default function Authenticated({ user, header, children }) {
    return (
        <>
            <Header user={user}/>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-lg-2 col-md-3 bg-success">Left Sidebar</div>
                    <div className="col-lg-10 col-md-9 bg-danger">
                        {children}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
