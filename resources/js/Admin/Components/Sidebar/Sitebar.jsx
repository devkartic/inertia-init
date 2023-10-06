import TreeRecursive from "@/Admin/Components/Tree/TreeRecursive.jsx";
const Sidebar = () => {
    const SidebarHeight = {minHeight: "850px"};
    const sidebarData = [
        {
            id: 1,
            label: 'Access Control',
            url: '#',
            children: [
                {
                    id: 2,
                    label: 'User',
                    url: route('users.index'),
                }
            ],
        },
        {
            id: 3,
            label: 'General',
            url: '#',
            children: [
                {
                    id: 4,
                    label: 'Basic',
                    url: 'dashboard',
                }
            ],
        },
        {
            id: 5,
            label: 'Inventory',
            url: '#',
            children: [
                {
                    id: 6,
                    label: 'Product Categories',
                    url: 'dashboard',
                },
                {
                    id: 6,
                    label: 'Products',
                    url: 'dashboard',
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




