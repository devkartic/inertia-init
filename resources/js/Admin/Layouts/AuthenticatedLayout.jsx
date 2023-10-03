import Header from "@/Admin/Components/Header.jsx";
import Footer from "@/Admin/Components/Footer.jsx";
import {Col, Container, Row, ListGroup} from "react-bootstrap";
import SidebarOffCanvas from "@/Admin/Components/Sidebar/SidebarOffCanvas.jsx";

import {useState} from "react";
import Sidebar from "@/Admin/Components/Sidebar/Sitebar.jsx";
export default function Authenticated({ user, header, children }) {
    const [showSidebar, setShowSidebar] = useState(false);
    const handleCloseSidebar = () => setShowSidebar(false);
    const handleShowSidebar = () => setShowSidebar(true);
    return (
        <>
            <Header user={user} onclick={handleShowSidebar}/>
            <Container fluid>
                <Row>
                    <Col lg={2} md={3} className="bg-primary bg-opacity-75">
                        <SidebarOffCanvas class="d-block d-md-none" showSidebar={showSidebar} onclick={handleCloseSidebar}>
                            <Sidebar/>
                        </SidebarOffCanvas>
                        <div className="d-none d-md-block pt-md-2">
                            <Sidebar/>
                        </div>
                    </Col>
                    <Col lg={10} md={9}  className="bg-light">
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}
