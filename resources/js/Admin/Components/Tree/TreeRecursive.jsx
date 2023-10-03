import React, {useState} from 'react';
import {FaAngleDown, FaAngleRight, FaLink} from "react-icons/fa";
const TreeNode = ({leaf, label, children}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div
                style={leaf}
                className="list-group-item"
                onClick={() => setOpen(!open)}
            >
                {children ? open ? <FaAngleDown/> : <FaAngleRight/> : <FaLink/>} {label}
            </div>
            {open && <>{children}</>}
        </>
    );
}
const TreeRecursive = ({data, level = 1}) => {
    const leaf = {paddingLeft: `${level * 15}px`};
    return (
        <>
            {data.map((node) => (
                <TreeNode label={node.label} key={node.id} leaf={leaf}>
                    {node.children && <TreeRecursive data={node.children} level={level + 1}/>}
                </TreeNode>
            ))}
        </>
    );
};

export default TreeRecursive;
