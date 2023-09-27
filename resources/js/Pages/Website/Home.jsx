import { Link, Head } from '@inertiajs/react';
import Header from "@/CustomComponents/Website/Includes/Header.jsx";
import Footer from "@/CustomComponents/Website/Includes/Footer.jsx";

export default function Home({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <Header auth={auth}/>
            <div className="container-fluid">
                <div className="col">
                    <div className="container py-12">
                        <p className="h1 text-center text-warning py-5">Coming Soon !!!</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
