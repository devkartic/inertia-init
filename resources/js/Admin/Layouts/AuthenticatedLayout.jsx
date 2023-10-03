import Header from "@/Admin/Components/Header.jsx";
import Footer from "@/Admin/Components/Footer.jsx";
import {Col, Container, Row, ListGroup} from "react-bootstrap";
import fetchNodes from "@/Admin/Components/Sidebar/fetchNodes.jsx";
import NestedListGroup from "@/Admin/Components/Sidebar/NestedListGroup.jsx";
import Sidebar from "@/Admin/Components/Sidebar/Sidebar.jsx";
import {useState} from "react";
const nodes = fetchNodes();
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
                        <Sidebar class="d-block d-md-none" showSidebar={showSidebar} onclick={handleCloseSidebar}>
                            <NestedListGroup nodes={nodes}/>
                        </Sidebar>
                        <div className="d-none d-md-block pt-md-2">
                            <NestedListGroup nodes={nodes}/>
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
