import React from 'react';
import './Contact.css'
import SharedButton from '../../../shared/SharedButton';

const Contact = () => {
    return (
        <div className='text-center contact-bg py-16 my-10'>
            <h6 className='text-secondary'>Contact Us</h6>
            <h3 className='text-3xl text-white'>Stay connected with us</h3>
            <div className=''>
                <input type="text" placeholder="Email address" className="input w-full max-w-xs my-2" />
                <br />
                <input type="text" placeholder="Subject" className="input w-full max-w-xs my-2" />
                <br />
                <textarea type="text" placeholder='Your message' name="" className="w-full max-w-xs p-3 rounded-lg my-2" id="" cols="30" rows="5"></textarea>
            </div>
            <SharedButton>Submit</SharedButton>
        </div>
    );
};

export default Contact;