import React from 'react';
import Banner from './Banner/Banner';
import DoctorAppointment from './DoctorAppointment/DoctorAppointment';
import Info from './Info/Info';
import PatientReviews from './PatientReviews/PatientReviews';
import Service from './Service/Service';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <DoctorAppointment></DoctorAppointment>
            <PatientReviews></PatientReviews>
            
        </div>
    );
};

export default Home;