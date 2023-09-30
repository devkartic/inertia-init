import GuestLayout from '@/Admin/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, useForm } from '@inertiajs/react';
import {Col, FloatingLabel, Form, Row} from "react-bootstrap";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="my-3 text-dark-emphasis">
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </div>

            {status && <div className="alert alert-warning" role="alert">{status}</div>}

            <form onSubmit={submit}>
                <Row className="mb-3">
                    <Col md>
                        <FloatingLabel controlId="floatingInputEmail" label="Email">
                            <Form.Control type="email" name="email" placeholder="Email" autoComplete="email"
                                          value={data.email} onChange={(e) => setData('email', e.target.value)}/>
                            <InputError className="form-text text-danger" message={errors.email}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md className="d-grid">
                        <PrimaryButton className="btn btn-primary" disabled={processing}>
                            Email Password Reset Link
                        </PrimaryButton>
                    </Col>
                </Row>
            </form>
        </GuestLayout>
    );
}
