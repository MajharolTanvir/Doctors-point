import React, { useState } from 'react';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AppointmentCard from './AppointmentCard/AppointmentCard'

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className='container mx-auto'>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AppointmentCard date={date}></AppointmentCard>
        </div>
    );
};

export default Appointment;