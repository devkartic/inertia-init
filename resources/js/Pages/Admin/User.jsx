import AuthenticatedLayout from '@/Admin/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import {Button, Table} from "react-bootstrap";
import {FaEye, FaEdit, FaTrash} from "react-icons/fa";
export default function Dashboard({ auth, props }) {
    console.log(props);
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
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                            <>
                                <Button variant="outline-info"><FaEye/></Button>{' '}
                                <Button variant="outline-warning"><FaEdit/></Button>{' '}
                                <Button variant="outline-danger"><FaTrash/></Button>
                            </>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                            <>
                                <Button variant="outline-info"><FaEye/></Button>{' '}
                                <Button variant="outline-warning"><FaEdit/></Button>{' '}
                                <Button variant="outline-danger"><FaTrash/></Button>
                            </>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                            <>
                                <Button variant="outline-info"><FaEye/></Button>{' '}
                                <Button variant="outline-warning"><FaEdit/></Button>{' '}
                                <Button variant="outline-danger"><FaTrash/></Button>
                            </>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </AuthenticatedLayout>
    );
}
