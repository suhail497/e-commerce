import React from 'react';
import './cart-dropdown.styles.scss';
// import CustomButton from '../custom-button/custom-button.component';
import { connect } from "react-redux"
import CartItem from '../cart-item/cart-item.component';
import { createStructuredSelector } from "reselect" //grabing the data
import { selectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from "react-router-dom" //hoc
import { toggelCartHidden } from './../../redux/cart/cart.actions';
import {
    CartDropdownContainer,
    CartItemsContainer,
    CartDropdownButton
} from './cart-dropdown.styles';


const Cartdropdown = ({ cartItems, history, dispatch }) => {
    // console.log(otherProps)
    return (

        <CartDropdownContainer>
            <CartItemsContainer>

                {
                    cartItems.map(cartItem => <CartItem cartItem={cartItem} />)
                }

            </CartItemsContainer>
            <CartDropdownButton
                onClick={() => {
                    history.push('/checkout')
                    dispatch(toggelCartHidden())
                }}>

                GoToCheckOut</CartDropdownButton>
        </CartDropdownContainer>
    )

}

// const mapStateToProps = ({ cart: { cartItems } }) =>
//     ({
//         cartItems
//     })

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems
    }
)

export default withRouter(connect(mapStateToProps)(Cartdropdown)) 