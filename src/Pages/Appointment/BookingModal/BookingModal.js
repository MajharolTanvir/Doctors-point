import { format } from 'date-fns';
import React from 'react';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
    const { name, slots } = treatment
    const [user] = useAuthState(auth)
    const formattedDate = format(date, 'PP')
    // console.log(formattedDate);

    const handleSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: treatment._id,
            treatment: treatment.name,
            date: formattedDate,
            slot,
            patientName: user?.displayName,
            patientEmail: user?.email,
            phone: event.target.phone.value,
        }
        console.log(booking);
        fetch('https://gentle-basin-92445.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} in ${slot} `)
                }
                else {
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                setTreatment(null)
            })

    }
    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="Booking-modal" className="btn bg-gradient-to-r from-secondary to-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className='font-bold text-xl text-secondary text-center my-2'>{name}</h3>
                    <form className="grid grid-cols-1 gap-2 justify-items-center" onSubmit={handleSubmit}>
                        <input type="text" name='date' value={format(date, "PP")} className="input w-full max-w-xs border-2 border-gray-200" disabled />
                        <select name='slot' className="select select-ghost w-full max-w-xs border-2 border-gray-200">
                            {slots.map((slot, index) => <option key={index}>{slot}</option>)}
                        </select>
                        <input name='name' type="text" placeholder="Full name" value={user?.displayName} className="input w-full max-w-xs border-2 border-gray-200" disabled />
                        <input name='email' type="text" value={user?.email} placeholder="Email address" className="input w-full max-w-xs border-2 border-gray-200" disabled />
                        <input name='phone' type="text" placeholder="Phone number" className="input w-full max-w-xs border-2 border-gray-200" />
                        <input type="submit" value="Submit" className="btn bg-gradient-to-r from-secondary to-primary font-bold text-white mt-0 max-w-xs w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;