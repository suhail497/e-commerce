import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({ price }) => {

    const priceForStripe = price * 100
    const pusblishbalKey = "pk_test_51H1AS0G6q7C2sk20QOBonjdywCMX4oWQpsnbJscAlHwfmKiPhKSnVDoHq98Eums5tKtSH3TuwaStM4yxsgUMguuw00yD8xblAd"
    const onToken = (token) => {
        console.log(token)
        alert('Payment Sucessfull')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Crwn Clothing Pvt Ltd"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={pusblishbalKey}

        />
    );
}

export default StripeButton;
