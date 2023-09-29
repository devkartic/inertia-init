import {useEffect} from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Admin/Layouts/GuestLayout.jsx';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {Head, Link, useForm} from '@inertiajs/react';

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
                <div className="form-floating mb-3">
                    <TextInput type="email" name="email" className="form-control" id="floatingEmail" autoComplete="email" value={data.email} onChange={(e) => setData('email', e.target.value)}/>
                    <InputLabel htmlFor="floatingEmail">Email</InputLabel>
                    <InputError className="form-text text-danger" message={errors.email}/>
                </div>
                <div className="form-floating mb-3 ">
                    <TextInput type="password" className="form-control" id="floatingPassword" autoComplete="current-password" value={data.password} onChange={(e) => setData('password', e.target.value)}/>
                    <InputLabel htmlFor="floatingPassword">Password</InputLabel>
                    <InputError className="form-text text-danger" message={errors.password}/>
                </div>
                <div className="mb-3 form-check">
                    <Checkbox name="remember" className="form-check-input" id="rememberCheck" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)}/>
                    <InputLabel className="form-check-label" htmlFor="rememberCheck">Remember me</InputLabel>
                </div>
                <div className="mb-3 form-label">
                    <Link className="text-decoration-none" href={route('password.request')}>Forgot your password?</Link>
                </div>
                <div className="d-grid">
                    <PrimaryButton className="btn btn-primary px-md-4" disabled={processing}>Log In</PrimaryButton>
                </div>
            </form>
            <div className="mt-3">
                <Link className="text-decoration-none" href={route('register')}>Register a new membership?</Link>
            </div>
        </GuestLayout>
    );
}
