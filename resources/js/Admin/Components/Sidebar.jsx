export default function Sidebar(){
    return (
        <>
            <div className="offcanvas offcanvas-start d-lg-block" tabIndex="-1" id="offcanvasAdminSidebar" aria-labelledby="offcanvasAdminSidebarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title d-inline-flex p-2 fs-4 fw-bold" id="offcanvasAdminSidebarLabel">E-Shop Admin</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                </div>
            </div>
        </>
    );
}
