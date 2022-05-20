import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading';
import DoctorRow from './DoctorRow.js'

const ManageDoctor = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sl. no</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                refetch={refetch}
                                index={index}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;