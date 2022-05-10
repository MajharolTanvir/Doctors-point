import React from 'react';
import PatientReviewCard from './PatientReviewCard/PatientReviewCard'
import background from '../../../assets/icons/quote.svg'

const PatientReviews = () => {
    return (
        <div className='container mx-auto'>
            <div style={{ background: { background } }}>
                <h6 className='text-secondary'>Testimonial</h6>
                <h3 className='text-3xl'>What Our Patient Says</h3>
            </div>
            <div>
                <PatientReviewCard></PatientReviewCard>
            </div>
        </div>
    );
};

export default PatientReviews;