import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData()
    console.log(data)
    const { price, name } = data
    return (
        <div>
            <h2 className='text-3xl text-center'>Payment</h2>
            <h4 className='text-3xl text-center'>Your Payment {price} for {name}</h4>

        </div>
    );
};

export default Payment;