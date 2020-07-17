import React from "react"
import './checkout-items.styles.scss'
import { connect } from "react-redux"
import { addItem, clearItem, removeItem } from '../../redux/cart/cart.actions';
import { CheckoutItemContainer, CheckoutImageContainer, TextDetailsSpan, QuantityContainer, RemoveButtonContainer } from './checkout-items.styles';



const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { imageUrl, name, price, quantity } = cartItem
    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <img src={imageUrl} alt="item" />
            </CheckoutImageContainer>
            <TextDetailsSpan>{name} </TextDetailsSpan>

            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)} >&#10094;</div>
                <span >{quantity}</span>
                <div onClick={() => addItem(cartItem)} >&#10095;</div>
            </QuantityContainer>

            <TextDetailsSpan> {price} </TextDetailsSpan>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005; </RemoveButtonContainer>

        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = (dispatch) => (
    {
        clearItem: item => dispatch(clearItem(item)),
        addItem: item => dispatch(addItem(item)),
        removeItem: item => dispatch(removeItem(item))
    }
)


export default connect(null, mapDispatchToProps)(CheckoutItem)