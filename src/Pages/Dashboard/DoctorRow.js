import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, specialty, img, email } = doctor

    const handleDelete = email => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            fetch(`http://localhost:5000/doctor/${email}`, {
                method: 'DELEtE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deleteCount > 0) {
                        toast.success(`Doctor:${name} has been removed.`)
                    }
                })
        }
        refetch()
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleDelete(email)} className="btn btn-xs btn-error">DELETE</button></td>
        </tr>
    );
};

export default DoctorRow;