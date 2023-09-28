import {Link} from '@inertiajs/react';
import CustomComponent from "@/Admin/Components/CustomComponent.jsx";
import Header from "@/Admin/Components/Header.jsx";
import Footer from "@/Admin/Components/Footer.jsx";

export default function Authenticated({user}) {
    return (
        <>
            <Header user={user}/>
            <Footer/>
        </>
    );
}
