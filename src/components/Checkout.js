import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = props => {
  // console.log(props)
  const stripe = useStripe();
  const elements = useElements();

  return (
    <div
      style={{
        marginTop: 15,
        width: '50%',
        margin: 'auto'
      }}>
      <CardElement options={{ hidePostalCode: true }} />
    </div>
  )
}

export default CheckoutForm;