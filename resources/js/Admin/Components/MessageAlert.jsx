import {Alert, Button, Col, Row} from "react-bootstrap";
import {useState} from "react";

export const MessageAlert = ({variant, message}) => {
    const [show, setShow] = useState(true);
    if (message && show) {
        return (
            <Row>
                <Col>
                    <Alert className="my-3 fw-bold" variant={variant} onClose={() => setShow(false)} dismissible>
                        {message}
                    </Alert>
                </Col>
            </Row>
        );
    }
}
