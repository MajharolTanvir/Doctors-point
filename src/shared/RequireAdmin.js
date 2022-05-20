import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from './Loading';
import useAdmin from '../hooks/useAdmin';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user)
    let location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAdmin;