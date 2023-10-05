import AuthenticatedLayout from '@/Admin/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import Button from 'react-bootstrap/Button';
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h3 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h3>}
        >
            <Head title="Dashboard" />

            <div className="row">
                You're logged in!
            </div>
        </AuthenticatedLayout>
    );
}
