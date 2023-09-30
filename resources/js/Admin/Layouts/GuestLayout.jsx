import {Container} from "react-bootstrap";

export default function GuestLayout({ props, children }) {
    return (
        <>
            <Container fluid className="bg-light">
                <div className="row justify-content-center py-3 py-md-5">
                    <div className="col-md-4 my-3 pb-5 rounded">
                        <div className="h2 text-center my-3"><span className="text-primary">E-Shop</span> {children[0].props.title}</div>
                        <div className="card shadow border-0 p-md-5">
                            <div className="card-body">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
