import { useEffect } from 'react';
import GuestLayout from '@/Admin/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import Checkbox from "@/Components/Checkbox.jsx";

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
                <div className="d-grid">
                    <PrimaryButton className="btn btn-primary px-4" disabled={processing}>Password Reset</PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
