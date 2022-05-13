import React from 'react';
import Loading from '../../shared/Loading';
import SocialLink from '../../shared/SocialLink';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (user) {
        console.log(user);
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    let signInError;
    if (error || updateError) {
        signInError = <p><small>{error.message || updateError.message}</small></p>
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.Email, data.Password)
        await updateProfile({ displayName: data.displayName })
        navigate(from, { replace: true })
    };
    return (
        <div className='flex justify-center items-center my-10'>
            <div className="card w-96 shadow-xl">
                <div className="card-body -mb-5">
                    <h2 className="text-2xl font-bold text-center">Sign up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg font-medium font-sans">Name</span>
                            </label>
                            <input type="text" placeholder='Your name' className="input input-bordered w-full max-w-xs" {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                },
                            })} />
                        </div>
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
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
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg font-medium font-sans">Password</span>
                            </label>
                            <input type="password" placeholder='Your password' className="input input-bordered w-full max-w-xs" {...register("Password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password must have 6 character'
                                }
                            })} />
                        </div>
                        <label className="label">
                            {errors.Password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Password.message}</span>}
                            {errors.Password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.Password.message}</span>}
                        </label>
                        <label className="label">
                            <span className="label-text-alt">Forget password?</span>
                        </label>
                        {signInError}
                        <input className="btn btn-accent w-full max-w-xs" type="submit" value="Sign up" />
                    </form>
                    <div className='text-center'>
                        <small className='font-medium'>Already have an account?<Link className='text-secondary ml-1' to='/Login'>Please login</Link></small>
                    </div>
                </div>
                <div className="divider">OR</div>
                <SocialLink></SocialLink>
            </div>
        </div>
    );
};

export default Registration;