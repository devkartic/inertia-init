import {useEffect} from 'react';
import GuestLayout from '@/Admin/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import {Head, Link, useForm} from '@inertiajs/react';
import {Col, FloatingLabel, Form, Row} from "react-bootstrap";

export default function Register() {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        email: '',
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

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register"/>

            <form onSubmit={submit}>
                <Row className="mb-3">
                    <Col md>
                        <FloatingLabel controlId="floatingInputName" label="Name">
                            <Form.Control type="text" name="name" placeholder="Name" autoComplete="name"
                                          value={data.name} onChange={(e) => setData('name', e.target.value)}
                                          autoFocus={true}/>
                            <InputError className="form-text text-danger" message={errors.name}/>
                        </FloatingLabel>
                    </Col>
                </Row>
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
                    <Col md>
                        <Form.Check name="agree_terms" label="I agree to the terms" checked={data.agree_terms}
                                    onChange={(e) => setData('agree_terms', e.target.checked)}/>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md className="d-grid">
                        <PrimaryButton className="btn btn-primary px-4" disabled={processing}>Register</PrimaryButton>
                    </Col>
                </Row>
            </form>

            <Row className="mb-3">
                <Col md>
                    <Link className="text-decoration-none" href={route('login')}>I already have a membership?</Link>
                </Col>
            </Row>
        </GuestLayout>
    );
}
