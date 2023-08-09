import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe=useStripe();
    const element=useElements();
    const[carderror,setcarderror]=useState('');

    const handleSubmit=async(event)=>{

        event.preventDefault();
        if(!stripe || !element)
        {
            return;
        }
    const card = element.getElement(CardElement);
    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      })
      if (error) {
        console.log(error)
        setcarderror(error.message);
       
      } 
      else {
        // setCardError("");
        console.log(paymentMethod);
        
      }
    }
    return (
        <>
     <form className='w-1/2' onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-outline btn-primary mt-6' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
{
    carderror && <p className='text-red-600 mb-5'>{carderror}</p>
}
        </>
    );
};

export default CheckoutForm;