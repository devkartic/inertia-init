import React, {useState} from 'react';
import {FaAngleDown, FaAngleRight, FaLink} from "react-icons/fa";
import {Link} from "@inertiajs/react";
const TreeNode = ({leaf, label, url, children}) => {
    const [open, setOpen] = useState(false);
    const handleOnclickEvent = (e) => {
        setOpen(!open);
        if(e.target.getAttribute('href') ==="") e.preventDefault();
    }
    return (
        <>
            <Link
                href={url}
                style={leaf}
                className="list-group-item"
                onClick={handleOnclickEvent}
            >
                {children ? open ? <FaAngleDown/> : <FaAngleRight/> : <FaLink/>} {label}
            </Link>
            {open && <>{children}</>}
        </>
    );
}
const TreeRecursive = ({data, level = 1}) => {
    const leaf = {paddingLeft: `${level * 15}px`};
    return (
        <>
            {data.map((node) => (
                <TreeNode label={node.label} url={node.url} key={node.id} leaf={leaf}>
                    {node.children && <TreeRecursive data={node.children} level={level + 1}/>}
                </TreeNode>
            ))}
        </>
    );
};

export default TreeRecursive;
