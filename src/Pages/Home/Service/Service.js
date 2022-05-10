import React from 'react';
import ServiceBanner from './ServiceBanner/ServiceBanner'
import ServiceCard from './ServiceCard/ServiceCard';


const Service = () => {

    return (
        <div className='text-center py-10 mx-auto'>
            <h6 className='text-primary font-bold'>Our service</h6>
            <h3 className='text-3xl'>Service We Provide</h3>
            <ServiceCard></ServiceCard>
            <ServiceBanner></ServiceBanner>
        </div>
    );
};

export default Service;