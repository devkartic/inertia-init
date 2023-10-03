import CustomComponent from "@/Admin/Components/CustomComponent.jsx";
import {Container, Row, Col, Dropdown, Button} from "react-bootstrap";
import {FaBars} from "react-icons/fa6";
import {Link} from "@inertiajs/react";

export default function Header({user, onclick}) {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={2} md={3} className="bg-primary">
                        <div className="p-2 fs-4 fw-bold d-none d-md-block"><Link className="text-warning text-decoration-none" href={route('dashboard')}>E-Shop Admin</Link></div>
                        <Button variant="primary" className="p-2 fs-4 fw-bold d-block d-md-none" onClick={onclick}><FaBars/></Button>
                    </Col>
                    <Col lg={10} md={9} className="bg-info">
                        <div className="d-flex p-2 justify-content-end">
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">{user.name} </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href={route('profile.edit')}>Profile</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    <Dropdown.Divider></Dropdown.Divider>
                                    <CustomComponent.LinkPostMethod className="dropdown-item text-left" href={route('logout')} method="post" as="button">Logout</CustomComponent.LinkPostMethod>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
