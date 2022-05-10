import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import SharedButton from '../../../shared/SharedButton';
import './DoctorAppointment.css'

const DoctorAppointment = () => {
    return (
        <section className='flex items-center doctor-appointment-bg my-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px] mb-0' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white lg:px-20 p-8'>
                <h6 className='text-secondary font-bold'>Appointment</h6>
                <h3 className='font-medium py-2 text-3xl'>Make an appointment Today</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <SharedButton>Get started</SharedButton>
            </div>
        </section>
    );
};

export default DoctorAppointment;