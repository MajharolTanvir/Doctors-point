import React from 'react';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Loading from '../../../shared/Loading';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ForgetPass = () => {
    const [sendPasswordResetEmail, resetSending, resetError] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    if (resetSending) {
        return <Loading></Loading>
    }

    if (resetError) {
        toast(resetError.message)
    }
    const onSubmit = async data => {
        await sendPasswordResetEmail(data.Email)
        toast('Reset email send successfully')
        navigate('/login')
    };
    return (
        <div>
            <div className='flex justify-center items-center my-10'>
                <div className="card w-96 shadow-xl">
                    <div className="card-body -mb-5">
                        <h2 className="text-2xl font-bold text-center">Forget password</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg font-medium font-sans">Email</span>
                                </label>
                                <input type="email" placeholder='Your email' className="input input-bordered w-full max-w-xs" {...register("Email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                                        message: 'Enter a valid email'
                                    }
                                })} />
                            </div>
                            <label className="label">
                                {errors.Email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Email.message}</span>}
                                {errors.Email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.Email.message}</span>}
                            </label>
                            <label className="label">
                                {errors.Password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Password.message}</span>}
                                {errors.Password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.Password.message}</span>}
                            </label>
                            <input className="btn btn-accent w-full max-w-xs" type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPass;