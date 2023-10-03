import {Link} from "@inertiajs/react";

function CustomComponent() {
    return (
        <></>
    );
}

const LinkPostMethod = ({className = '', children, ...props}) => {
    return (
        <Link
            {...props}
            className={className}
        >
            {children}
        </Link>
    );
};

CustomComponent.LinkPostMethod = LinkPostMethod;

export default CustomComponent;
