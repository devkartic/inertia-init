import {Col, Container, Row} from "react-bootstrap";

export default function Footer({ auth }) {
    return (
        <>
            <Container fluid className="py-3">
                <Row>
                    <Col className="bg-light">
                        <Container>
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p className="fs-6">© 2023 Copyright E-Shop. All Rights Reserved</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Designed & Developed by  <span className="text-primary" title="Source Title">Crazy Coder's Cafe</span>
                                </figcaption>
                            </figure>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
