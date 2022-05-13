import React from 'react';
import auth from '../firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLink = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true })
    }


    let signInError;
    if (error) {
        signInError = <p><small>{error.message}</small></p>
    }
    return (
        <div className='text-center card-body -mt-4'>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline btn-accent w-full"
            >CONTINUE WITH GOOGLE</button>
            {signInError}
        </div>
    );
};

export default SocialLink;