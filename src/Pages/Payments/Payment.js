import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {
    const data = useLoaderData()
    console.log(data)
    const stripePromise=loadStripe(process.env.REACT_APP_Payment_Getway_PK);
    const { price, name } = data;
    return (
        <div>
            <h2 className='text-3xl text-center'>Payment</h2>
            <h4 className='text-3xl text-center mb-6'>Your Payment {price} for {name}</h4>
            <Elements className='text-3xl' stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
            </Elements>
           

        </div>
    );
};

export default Payment;