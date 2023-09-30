import { Link } from '@inertiajs/react';
import {Container, Navbar, Nav, NavDropdown, Form, Button} from "react-bootstrap";

export default function Header({auth}) {
    return (
        <>
            <Container fluid className="bg-info">
                <Navbar expand="lg" className="bg-body-info">
                    <Container>
                        <Navbar.Brand className="fw-bold fs-2 text-primary" href={route('login')}>E-Shop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarWebsiteScroll" />
                        <Navbar.Collapse id="navbarWebsiteScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '150px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Features</Nav.Link>
                                <NavDropdown title="Link" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Category</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Product cate 1
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Product cate 2
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#" disabled>
                                    Products
                                </Nav.Link>
                            </Nav>
                            <div className="d-flex me-2">
                                {auth.user ? (
                                    <Link className="btn btn-outline-primary me-2" href={route('dashboard')}>Dashboard</Link>
                                ) : (
                                    <>
                                        <Link className="btn btn-primary me-2" href={route('login')}>Login</Link>
                                        <Link className="btn btn-primary" href={route('register')}>Register</Link>
                                    </>
                                )}
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </>
    );
}
