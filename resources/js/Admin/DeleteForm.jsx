import {FaTrash} from "react-icons/fa";
import Swal from "sweetalert2";
import {useForm} from "@inertiajs/react";
export const DeleteForm = ({href}) => {
    const form = useForm();
    const deleteHandler = () => {
        // Using Sweetalert2
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                form.delete(href);
                Swal.fire(
                    'Done!',
                    'Deleted successfully.',
                    'success'
                )
            }
        })
    }
    return (
        <>
            <button className="btn btn-sm btn-outline-danger" onClick={deleteHandler}><FaTrash/></button>
        </>
    );
}
