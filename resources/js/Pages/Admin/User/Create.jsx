import AuthenticatedLayout from '@/Admin/Layouts/AuthenticatedLayout.jsx';
import {Head, Link, useForm} from '@inertiajs/react';
import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {PageTitle} from "@/Admin/Components/PageTitle.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import React, {useEffect} from "react";
import {Transition} from '@headlessui/react';
import {MessageAlert} from "@/Admin/Components/MessageAlert.jsx";

export default function Create({auth, flash}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('name', 'email', 'password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('users.store'));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<PageTitle title="User Create"/>}
        >
            <Head title="Create User"/>

            {flash && flash.success && <MessageAlert variant="success" message={flash.success} />}

            <div className="row">
                <div className="col-md-12 py-3">
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
                                    <Form.Control type="email" name="email" placeholder="Email" autoComplete="new-email"
                                                  value={data.email}
                                                  onChange={(e) => setData('email', e.target.value)}/>
                                    <InputError className="form-text text-danger" message={errors.email}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md>
                                <FloatingLabel controlId="floatingInputPassowrd" label="Password">
                                    <Form.Control type="password" name="password" placeholder="Password"
                                                  autoComplete="new-password" value={data.password}
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
                                    <InputError className="form-text text-danger"
                                                message={errors.password_confirmation}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md className="d-block">
                                <PrimaryButton className="btn btn-primary px-4"
                                               disabled={processing}>Create</PrimaryButton>
                            </Col>
                        </Row>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
