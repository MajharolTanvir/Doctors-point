import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';


const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl text-primary font-bold text-center mb-5'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-fit bg-base-100 text-base-content">
                    <li><Link to='/Dashboard'>My Appointment</Link></li>
                    <li><Link to='myReview'>My Reviews</Link></li>
                    <li><Link to='myHistory'>My History</Link></li>
                    {admin && <>
                        <li><Link to='users'>All users</Link></li>
                        <li><Link to='addDoctor'>Add doctor</Link></li>
                        <li><Link to='manageDoctor'>Manage doctor</Link></li>
                        <li><Link to='manageDoctor'>Manage doctor</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;