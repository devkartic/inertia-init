import { Link, Head } from '@inertiajs/react';
import Header from "@/Website/Components/Header.jsx";
import Footer from "@/Website/Components/Footer.jsx";
import {Container, Row, Col} from "react-bootstrap";


export default function Home({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <Header auth={auth}/>
            <Container fluid className="bg-light">
                <Row className="col">
                    <Col>
                        <p className="h1 text-center text-warning py-5">Coming Soon !!!</p>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}
