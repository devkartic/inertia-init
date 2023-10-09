import AuthenticatedLayout from '@/Admin/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import {Button, Table} from "react-bootstrap";
import {FaEye, FaEdit, FaTrash} from "react-icons/fa";
import {FormatDateTime} from "@/Admin/Components/FormatDateTime.jsx";
import {PageTitle} from "@/Admin/Components/PageTitle.jsx";
import {DeleteForm} from "@/Admin/DeleteForm.jsx";

export default function Index({auth, users}) {
    // console.log(users);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageTitle title="User List" route={route('users.create')}/>}
        >
            <Head title="Users"/>

            <div className="row">
                <Table responsive="sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{++index}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><FormatDateTime date={user.created_at}/></td>
                                <td><FormatDateTime date={user.updated_at}/></td>
                                <td>
                                    <>
                                        <Link href="#" className="btn btn-sm btn-outline-info"><FaEye/></Link>{' '}
                                        <Link href={route('users.edit', user.id)} className="btn btn-sm btn-outline-warning"><FaEdit/></Link>{' '}
                                        <DeleteForm href={`users/${user.id}`} />
                                    </>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </div>
        </AuthenticatedLayout>
    );
}
