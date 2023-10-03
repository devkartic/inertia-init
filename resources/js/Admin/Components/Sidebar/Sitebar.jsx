import TreeRecursive from "@/Admin/Components/Tree/TreeRecursive.jsx";
const Sidebar = () => {
    const SidebarHeight = {minHeight: "850px"};
    const sidebarData = [
        {
            id: 1,
            label: 'Access Control',
            children: [
                {
                    id: 2,
                    label: 'User',
                }
            ],
        },
        {
            id: 3,
            label: 'General',
            children: [
                {
                    id: 4,
                    label: 'Basic',
                }
            ],
        },
        {
            id: 5,
            label: 'Inventory',
            children: [
                {
                    id: 6,
                    label: 'Product Categories',
                },
                {
                    id: 6,
                    label: 'Products',
                },
            ],
        },
    ];
    return (
        <div className="list-group" style={SidebarHeight}>
            <TreeRecursive data={sidebarData}/>
        </div>
    );
};

export default Sidebar;




