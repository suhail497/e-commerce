import React from 'react'
import { connect } from 'react-redux'
import { addItem } from './../../redux/cart/cart.actions'

import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
// import {
//     CollectionItemContainer, CollectionImageContainer, CollectionCustomButton, CollectionFootorContainer, NameCollectionSpan,
//     PriceSpan
// // } from './collection-item.styled';
// import { CollectionItemContainer } from './collection-item.styled';

// import { CollectionItemContainer, AddButton, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer } from './collection-item.styled';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted >AddToCart</CustomButton>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => (
    {
        addItem: item => dispatch(addItem(item))

    }
)

export default connect(null, mapDispatchToProps)(CollectionItem)




//  <CollectionItemContainer>
// <BackgroundImage className='image' imageUrl={imageUrl} />
// <CollectionFooterContainer>
//     <NameContainer>{name}</NameContainer>
//     <PriceContainer>{price}</PriceContainer>
// </CollectionFooterContainer>
// <AddButton onClick={() => addItem(item)} inverted >AddToCart</AddButton>
// </CollectionItemContainer>