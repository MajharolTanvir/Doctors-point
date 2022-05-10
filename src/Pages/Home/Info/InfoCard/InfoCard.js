import React from 'react';

const InfoCard = ({ cardTitle, cardAbout, img, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-accent shadow-xl text-white ${bgClass}`} >
            <figure><img className='px-2 ml-6' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardAbout}</p>
            </div>
        </div>
    );
};

export default InfoCard;