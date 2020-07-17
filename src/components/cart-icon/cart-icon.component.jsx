import React from 'react';
import './cart-icon.styles.scss';
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux';
import { toggelCartHidden } from './../../redux/cart/cart.actions';
import { createStructuredSelector } from "reselect"
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { CartIconContainer, ItemCountSpan, ShoppingIconView } from './cart-icon.styles';



const CartIcon = ({ toggelCartHidden, itemCount }) => (
    <CartIconContainer
        onClick={toggelCartHidden}>
        <ShoppingIconView />
        <ItemCountSpan>{itemCount}</ItemCountSpan>
    </CartIconContainer>
)



const mapDispatchToProps = (dispatch) => (
    {
        toggelCartHidden: () => dispatch(toggelCartHidden())
    }
)

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     itemCount: cartItems.reduce(
//         (accumulatedQuantity, cartItem) =>
//             accumulatedQuantity + cartItem.quantity
//         , 0)
// })

const mapStateToProps = createStructuredSelector(
    {
        itemCount: selectCartItemsCount
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);