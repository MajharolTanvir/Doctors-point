import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`https://gentle-basin-92445.herokuapp.com/booking?patientEmail=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {

                    setAppointments(data)
                })
        }
    }, [user, navigate])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Sl no</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, index) => <tr key={appointment._id}>
                            <th>{index + 1}</th>
                            <th>{appointment.patientName}</th>
                            <td>{appointment.date}</td>
                            <td>{appointment.slot}</td>
                            <td>{appointment.treatment}</td>
                            <td>
                                {(appointment.price && !appointment.paid) && <Link to={`payment/${appointment._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                {(appointment.price && appointment.paid) && <span className='text-success'>Paid</span>}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;