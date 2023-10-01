import React, { useState } from "react";
import {
    FaAngleRight,
    FaAngleDown,
    FaLink,
} from "react-icons/fa";

const leaf = { paddingLeft: "30px" };
const branch = { paddingLeft: "15px" };

const Leaf = ({ url, label }, idx) => {
    return (
        <a
            href={url}
            className="list-group-item"
            style={leaf}
            key={`leaf-${idx}`}
            onClick={() => alert(url)}
        >
            <FaLink /> {label}
        </a>
    );
};

const Branch = ({ label, children }, idx) => {
    const [open, setOpen] = useState(false);
    const childList = children.map(Leaf);
    return (
        <>
            <div
                className="list-group-item"
                style={branch}
                onClick={() => setOpen(!open)}
                key={`branch-${idx}`}
            >
                {open ? <FaAngleDown /> : <FaAngleRight />}{" "} {label}
            </div>
            {open && childList}
        </>
    );
};

export default function NestedListGroup({ nodes }) {
    const SidebarHeight = { minHeight: "850px" };
    return (
        <div className="list-group" style={SidebarHeight}>{nodes.map(Branch)}</div>
    );
}
