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
                    <TextInput type="email" name="email" className="form-control" id="floatingInput" autoComplete="username" value={data.email} onChange={(e) => setData('email', e.target.value)}/>
                    <label htmlFor="floatingInput">Email</label>
                    <InputError className="form-text" message={errors.email}/>
                </div>
                <div className="form-floating mb-3 ">
                    <TextInput type="password" className="form-control" id="floatingPassword" autoComplete="current-password" value={data.password} onChange={(e) => setData('password', e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                    <InputError className="form-text" message={errors.password}/>
                </div>
                <div className="mb-3 form-check">
                    <Checkbox name="remember" className="form-check-input" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                <PrimaryButton className="btn btn-primary px-4" disabled={processing}>Sign In</PrimaryButton>
            </form>
        </GuestLayout>
    );
}
