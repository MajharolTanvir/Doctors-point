import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading'
import UserRow from './UserRow'

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://gentle-basin-92445.herokuapp.com/user', {
        method: 'GET',
        headers: {
            "authorization": `bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sl no</th>
                            <th>Email</th>
                            <th>Make admin</th>
                            <th>Remove user</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => <UserRow
                            key={user._id}
                            user={user}
                            refetch={refetch}
                        >
                        </UserRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;