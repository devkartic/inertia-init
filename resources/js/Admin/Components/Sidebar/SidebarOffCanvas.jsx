import {Offcanvas} from "react-bootstrap";
export default function SidebarOffCanvas({showSidebar, onclick, children}){
       return (
        <>
            <Offcanvas show={showSidebar} onHide={onclick}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>E-Shop</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {children}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
