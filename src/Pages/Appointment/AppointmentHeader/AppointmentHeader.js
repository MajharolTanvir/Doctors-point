import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <div className='container mx-auto banner-bg bg-cover'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="lg:max-w-2xl rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                        mode="single"
                        selected={date}
                            onSelect={setDate} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHeader;