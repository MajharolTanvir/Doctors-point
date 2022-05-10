import React from 'react';
import PatientReviewCard from './PatientReviewCard/PatientReviewCard'
import quote from '../../../assets/icons/quote.svg'

const PatientReviews = () => {
    return (
        <section className='container mx-auto'>
            <div className='flex justify-between'>
                <div>
                    <h6 className='text-secondary'>Testimonial</h6>
                    <h3 className='text-3xl'>What Our Patient Says</h3>
                </div>
                <div>
                    <img className='w-24 lg:w-48 ' src={quote} alt="" />
                </div>
            </div>
            <div>
                <PatientReviewCard></PatientReviewCard>
            </div>
        </section>
    );
};

export default PatientReviews;