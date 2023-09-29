import GuestLayout from '@/Admin/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";

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
                <div className="form-floating mb-3">
                    <TextInput type="email" name="email" className="form-control" id="floatingEmail" autoComplete="email" isFocused={true} value={data.email} onChange={(e) => setData('email', e.target.value)}/>
                    <InputLabel htmlFor="floatingEmail">Email</InputLabel>
                    <InputError className="form-text text-danger" message={errors.email}/>
                </div>

                <div className="d-grid">
                    <PrimaryButton className="btn btn-primary" disabled={processing}>
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
