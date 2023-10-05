import AuthenticatedLayout from '@/Admin/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import {Button, Table} from "react-bootstrap";
import {FaEye, FaEdit, FaTrash} from "react-icons/fa";
import moment from 'moment';
export default function Users({ auth, users }) {
    console.log(users);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h3 className="font-semibold text-xl text-gray-800 leading-tight">Users List</h3>}
        >
            <Head title="Users" />

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
                    {users.map((user, index)=>{
                        return (
                            <tr key={index}>
                                <td>{++index}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{moment(user.created_at).format('LL, hh:mm:ss A')}</td>
                                <td>{moment(user.updated_at).format('LL, hh:mm:ss A')}</td>
                                <td>
                                    <>
                                        <Button variant="outline-info"><FaEye/></Button>{' '}
                                        <Button variant="outline-warning"><FaEdit/></Button>{' '}
                                        <Button variant="outline-danger"><FaTrash/></Button>
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
