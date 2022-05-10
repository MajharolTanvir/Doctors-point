import React from 'react';
import wasim from '../../../../assets/images/people1.png'
import ayesha from '../../../../assets/images/people2.png'
import era from '../../../../assets/images/people3.png'

const PatientReviewCard = () => {
    const reviews = [
        { id: 1, name: 'Wasim abdullah', review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: wasim, country: 'California' },
        { id: 2, name: 'Ayesha rahman', review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: ayesha, country: 'Canada' },
        { id: 3, name: 'Era khan', review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: era, country: 'London' }
    ]
    return (
        <div className='py-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <div key={review.id} className="card w-full shadow-xl text-neutral-content">
                        <div className="card-body items-center text-center">
                            <p className="flex text-justify">{review.review}</p>
                            <div className="card-actions justify-between items-center mt-10 gap-6">
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={review.img} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <h6>{review.name}</h6>
                                    <h6>{review.country}</h6>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PatientReviewCard;