import AuthenticatedLayout from '@/Admin/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import Button from 'react-bootstrap/Button';
import {PageTitle} from "@/Admin/Components/PageTitle.jsx";
import {FaSmile} from "react-icons/fa";
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageTitle title={'Dashboard'}/>}
        >
            <Head title="Dashboard" />

            <div className="row">
                <div className="col-md-12 text-center py-5">
                    <div className="h4 text-success">You're logged in! <FaSmile/></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
