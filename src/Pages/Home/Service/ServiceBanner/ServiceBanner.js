import React from 'react';
import banner from '../../../../assets/images/treatment.png'


const ServiceBanner = () => {
    return (
        <div className='container mx-auto px-20 py-20'>
            <div className="card lg:card-side">
                <figure><img className='w-96' src={banner} alt="Album" /></figure>
                <div className="card-body my-auto">
                    <h2 className="card-title text-6xl text-left">Exceptional Dental Care, on Your Terms</h2>
                    <p className='text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions my-10">
                        <button className="btn btn-primary">GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;