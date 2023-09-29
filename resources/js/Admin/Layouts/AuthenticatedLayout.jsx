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
                    <div className="col-md-2 bg-success">Left Sidebar</div>
                    <div className="col-md-10 bg-danger">
                        {children}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
