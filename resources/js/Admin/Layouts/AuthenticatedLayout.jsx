import Header from "@/Admin/Components/Header.jsx";
import Footer from "@/Admin/Components/Footer.jsx";
import {Col, Container, Row} from "react-bootstrap";

export default function Authenticated({ user, header, children }) {
    return (
        <>
            <Header user={user}/>
            <Container fluid>
                <Row>
                    <Col lg={2} md={3}  className="bg-success">Left Sidebar</Col>
                    <Col lg={10} md={9}  className="bg-danger">
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}
