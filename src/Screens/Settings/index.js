import React, { Component, useState } from 'react';
import CheckoutForm from '../../components/Checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51I98eiADpqLOsbfMg7Sqh5TvQFPRvifh1U1za4bv3wDhEwbQdShvbzQ37NNLfd8sAENcd845FPSUjYZatN9dHHf700QcVrGvdq');

export default class Settings extends Component {
  render() {
    return(
      <div style={{ padding: 20, height: 180 }}>
        <p
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: global.blue,
            marginTop: 10,
          }}>
          Subscription Per Month P1,500
        </p>
        <div id="stripeCheckout">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              uid={'sdadsdas'}
              renewalDate={'22-10-2022'}
              customerID={'wedadee21321'}
            />
          </Elements>
        </div>
      </div>
    )
  }
}