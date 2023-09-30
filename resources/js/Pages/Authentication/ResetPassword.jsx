import { useEffect } from 'react';
import GuestLayout from '@/Admin/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, useForm } from '@inertiajs/react';
import {Col, FloatingLabel, Form, Row} from "react-bootstrap";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'));
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <form onSubmit={submit}>
                <Row className="mb-3">
                    <Col md>
                        <FloatingLabel controlId="floatingInputEmail" label="Email">
                            <Form.Control type="email" name="email" placeholder="Email" autoComplete="email"
                                          value={data.email} onChange={(e) => setData('email', e.target.value)} autoFocus={true}/>
                            <InputError className="form-text text-danger" message={errors.email}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md>
                        <FloatingLabel controlId="floatingInputPassowrd" label="Password">
                            <Form.Control type="password" name="password" placeholder="Password"
                                          autoComplete="current-password" value={data.password}
                                          onChange={(e) => setData('password', e.target.value)}/>
                            <InputError className="form-text text-danger" message={errors.password}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md>
                        <FloatingLabel controlId="floatingInputPasswordConfirmation" label="Password">
                            <Form.Control type="password" name="password_confirmation" placeholder="Re-Password"
                                          autoComplete="new-password" value={data.password_confirmation}
                                          onChange={(e) => setData('password_confirmation', e.target.value)}/>
                            <InputError className="form-text text-danger" message={errors.password_confirmation}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md className="d-grid">
                        <PrimaryButton className="btn btn-primary px-4" disabled={processing}>Password Reset</PrimaryButton>
                    </Col>
                </Row>
            </form>
        </GuestLayout>
    );
}
