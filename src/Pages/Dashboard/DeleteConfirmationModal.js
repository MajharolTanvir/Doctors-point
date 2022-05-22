import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmationModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor

    const handleDelete = email => {
        fetch(`https://gentle-basin-92445.herokuapp.com/doctor/${email}`, {
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
        setDeletingDoctor(null)
        refetch()
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name} ?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(email)} className="btn btn-xs btn-error">DELETE</button>
                        <label for="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;