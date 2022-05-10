import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard/InfoCard';

const Info = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20'>
                <InfoCard bgClassName='bg-gradient-to-r from-secondary to-primary' cardTitle='Opening Hours' cardAbout='Lorem Ipsum is simply dummy text of the pri' img={clock}></InfoCard>
                <InfoCard bgClassName='bg-third' cardTitle='Visit our location' cardAbout='Brooklyn, NY 10036, United States' img={marker}></InfoCard>
                <InfoCard bgClassName='bg-gradient-to-r from-secondary to-primary' cardTitle='Contact us now' cardAbout='+000 123 456789' img={phone}></InfoCard>
            </div>
        </div>
    );
};

export default Info;