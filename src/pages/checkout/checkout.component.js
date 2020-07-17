import React from "react"
import "./checkout.styles.scss"
import { createStructuredSelector } from "reselect"
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import { connect } from "react-redux"
import CheckoutItem from '../../components/checkout-item/checkout-items.component';
import StripeButton from '../../components/stripe-button/stripe-button';
import {
    CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer,
    TotalContainer, TestWarningContainer
} from './checkout.styles';


const CheckOut = ({ cartItems, total }) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>

                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>

            {
                cartItems.map(cartItem =>
                    <CheckoutItem cartItem={cartItem} />
                )
            }

            <TotalContainer>
                <span> Total: ${total} </span>
            </TotalContainer>
            <TestWarningContainer>
                *Please use the following test credit card for the payments*
            <br />
            4242 4242 4242 4242 - Exp: 11/20 - CVV: 123

            </TestWarningContainer>
            <StripeButton price={total} />
        </CheckoutPageContainer>

    )
}

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems,
        total: selectCartTotal
    }
)

export default connect(mapStateToProps, null)(CheckOut)