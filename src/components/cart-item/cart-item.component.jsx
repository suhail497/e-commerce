import React from "react"
import "./cart-item.styles.scss"
import {
    CartItemContainer,
    ImageContainer,
    ItemDetailsContainer,
    NameSpan
} from './cart-item.styles';


// objects destrucing objects properties
const CartItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
    return (
        <CartItemContainer>
            <ImageContainer src={imageUrl} alt="item" />
            <ItemDetailsContainer>
                <NameSpan>{name}</NameSpan>
                <span className='price'> {quantity} x ${price} </span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem