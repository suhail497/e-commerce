import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from "react-redux"
import CartItem from '../cart-item/cart-item.component';
import { createStructuredSelector } from "reselect" //grabing the data
import { selectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from "react-router-dom" //hoc
import { toggelCartHidden } from './../../redux/cart/cart.actions';

const Cartdropdown = ({ cartItems, history, dispatch }) => {
    // console.log(otherProps)
    return (

        <div className='cart-dropdown'>
            <div className='cart-items'>

                {
                    cartItems.map(cartItem => <CartItem cartItem={cartItem} />)
                }

            </div>
            <CustomButton
                onClick={() => {
                    history.push('/checkout')
                    dispatch(toggelCartHidden())
                }}>

                GoToCheckOut</CustomButton>
        </div>
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