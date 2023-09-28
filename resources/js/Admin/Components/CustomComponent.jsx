import {Link} from "@inertiajs/react";

function CustomComponent() {
    return (
        <></>
    );
}

const CustomLink = ({className = '', children, ...props}) => {
    return (
        <Link
            {...props}
            className={className}
        >
            {children}
        </Link>
    );
};

CustomComponent.Link = CustomLink;

export default CustomComponent;
