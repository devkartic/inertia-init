import { useEffect } from 'react';
import GuestLayout from '@/Admin/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Checkbox from "@/Components/Checkbox.jsx";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
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
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className="form-floating mb-3">
                    <TextInput type="text" name="name" className="form-control" id="floatingName" autoComplete="name" value={data.name} onChange={(e) => setData('name', e.target.value)}/>
                    <InputLabel htmlFor="floatingName">Name</InputLabel>
                    <InputError className="form-text text-danger" message={errors.name}/>
                </div>
                <div className="form-floating mb-3">
                    <TextInput type="email" name="email" className="form-control" id="floatingEmail" autoComplete="email" value={data.email} onChange={(e) => setData('email', e.target.value)}/>
                    <InputLabel htmlFor="floatingEmail">Email</InputLabel>
                    <InputError className="form-text text-danger" message={errors.email}/>
                </div>
                <div className="form-floating mb-3 ">
                    <TextInput type="password" className="form-control" id="floatingPassword" autoComplete="new-password" value={data.password} onChange={(e) => setData('password', e.target.value)}/>
                    <InputLabel htmlFor="floatingPassword">Password</InputLabel>
                    <InputError className="form-text text-danger" message={errors.password}/>
                </div>
                <div className="form-floating mb-3 ">
                    <TextInput type="password" className="form-control" id="password_confirmation" autoComplete="new-password" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)}/>
                    <InputLabel htmlFor="password_confirmation">Password</InputLabel>
                    <InputError className="form-text text-danger" message={errors.password_confirmation}/>
                </div>
                <div className="mb-3 form-check">
                    <Checkbox name="agree_terms" id="agreeTerms" className="form-check-input"/>
                    <InputLabel className="form-check-label" htmlFor="agreeTerms">I agree to the terms</InputLabel>
                </div>
                <div className="d-grid">
                    <PrimaryButton className="btn btn-primary px-4" disabled={processing}>Register</PrimaryButton>
                </div>
            </form>
            <div className="mt-3">
                <Link className="text-decoration-none" href={route('login')}>I already have a membership?</Link>
            </div>
        </GuestLayout>
    );
}
