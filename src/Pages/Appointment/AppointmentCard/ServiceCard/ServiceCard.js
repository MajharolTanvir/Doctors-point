import React from 'react';

const ServiceCard = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card w-full shadow-xl my-10">
            <div className="card-body text-center">
                <h2 className="card-title justify-center text-secondary">{name}</h2>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another day</span>}</p>
                <p>{slots.length} {slots.length <= 1 ? 'space' : 'spaces'} available</p>
                <div className="card-actions justify-center"><button></button>
                    <label onClick={() => setTreatment(service)} htmlFor="Booking-modal" disabled={slots.length === 0} className="btn bg-gradient-to-r from-secondary to-primary mt-10 font-bold text-white">BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;