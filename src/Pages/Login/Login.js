import React, { useEffect } from 'react';
import SocialLink from '../../shared/SocialLink'
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user, from, navigate])


    if (loading) {
        return <Loading></Loading>
    }

    let signInError;
    if (error) {
        signInError = <p><small>{error.message }</small></p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.Email, data.Password)
    };
    const handleReset = () => {
        navigate('/forgetPass')
    }

    return (
        <div className='flex justify-center items-center my-10'>
            <div className="card w-96 shadow-xl">
                <div className="card-body -mb-5">
                    <h2 className="text-2xl font-bold text-center">Login</h2>
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
                            <span className="label-text-alt"><button onClick={handleReset}>Forget password?</button></span>
                        </label>
                        {signInError}
                        <input className="btn btn-accent w-full max-w-xs" type="submit" value="Login" />
                    </form>
                    <div className='text-center'>
                        <small className='font-medium'>New to Doctor's portal?<Link className='text-secondary ml-1' to='/registration'>Create new account</Link></small>
                    </div>
                </div>
                <div className="divider">OR</div>
                <SocialLink></SocialLink>
            </div>
        </div>
    );
};

export default Login;