import {useEffect} from 'react';
import GuestLayout from '@/Admin/Layouts/GuestLayout.jsx';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import {Head, Link, useForm} from '@inertiajs/react';
import {Row, Col, FloatingLabel, Form} from 'react-bootstrap';

export default function Login({status, canResetPassword}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in"/>

            {status && <div className="alert alert-warning" role="alert">{status}</div>}

            <form onSubmit={submit}>
                <Row className="mb-3">
                    <Col md>
                        <FloatingLabel controlId="floatingInputEmail" label="Email">
                            <Form.Control type="email" name="email" placeholder="Email" autoComplete="email" value={data.email} onChange={(e) => setData('email', e.target.value)} autoFocus={true}/>
                            <InputError className="form-text text-danger" message={errors.email}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md>
                        <FloatingLabel controlId="floatingInputPassowrd" label="Password">
                            <Form.Control type="password" name="password" placeholder="Password" autoComplete="current-password" value={data.password} onChange={(e) => setData('password', e.target.value)}/>
                            <InputError className="form-text text-danger" message={errors.password}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md>
                        <Form.Check name="remember" label="Remember me" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)}/>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md>
                        <Link className="text-decoration-none" href={route('password.request')}>Forgot your password?</Link>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md className="d-grid">
                        <PrimaryButton className="btn btn-primary px-md-4" disabled={processing}>Log In</PrimaryButton>
                    </Col>
                </Row>
            </form>
            <Row className="mb-3">
                <Col md>
                    <Link className="text-decoration-none" href={route('register')}>Register a new membership?</Link>
                </Col>
            </Row>
        </GuestLayout>
    );
}
