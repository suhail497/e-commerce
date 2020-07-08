import React from "react"
import "./checkout.styles.scss"
import { createStructuredSelector } from "reselect"
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import { connect } from "react-redux"
import CheckoutItem from '../../components/checkout-item/checkout-items.component';
import StripeButton from '../../components/stripe-button/stripe-button';



const CheckOut = ({ cartItems, total }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>

                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map(cartItem =>
                    <CheckoutItem cartItem={cartItem} />
                )
            }

            <div className='total'>
                <span> Total: ${total} </span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for the payments*
            <br />
            4242 4242 4242 4242 - Exp: 11/20 - CVV: 123

            </div>
            <StripeButton price={total} />
        </div>

    )
}

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems,
        total: selectCartTotal
    }
)

export default connect(mapStateToProps, null)(CheckOut)