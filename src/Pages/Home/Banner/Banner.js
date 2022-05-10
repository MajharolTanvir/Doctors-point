import React from 'react';
import banner from '../../../assets/images/chair.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='container mx-auto banner-bg'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} alt='' class="lg:max-w-2xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-3xl lg:text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn bg-gradient-to-r from-secondary to-primary font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;