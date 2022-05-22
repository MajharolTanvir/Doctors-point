import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../shared/Loading';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51L1uuUCT1NJC8mjcbixyYrLbVw6nYtMtyiOJbmqtN7bxmX1mSwSQREZdjJqZldjHOa5Ax3xAPDdzNfP7Ayr3nZuH00SokcmCZ1');

const Payment = () => {
    const { id } = useParams()
    const url = `https://gentle-basin-92445.herokuapp.com/booking/${id}`
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-success">Hello,{appointment.patientName}</h2>
                                <h2 className="card-title">Pay for {appointment.treatment}</h2>
                                <p>We will see you <span className='text-orange-700'>{appointment.date}</span> at <span className='text-orange-700'>{appointment.slot}.</span></p>
                                <p>Please pay {appointment.price}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm
                                    appointment={appointment} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Payment;