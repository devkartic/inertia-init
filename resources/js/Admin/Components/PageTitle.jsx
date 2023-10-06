import {Link} from "@inertiajs/react";
import {FaPencil} from "react-icons/fa6";

export const PageTitle = ({title, route}) => {
    return (
        <>
            <div className="d-flex justify-content-between py-1">
                <div className="h3 text-secondary">{title}</div>
                {route ? (<div className="">
                    <Link href={route} className="btn btn-sm btn-primary ms-auto"><FaPencil/></Link>
                </div>) : ""}
            </div>
        </>
    );
}
