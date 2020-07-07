import React from 'react'
import './collection-preview.styles.scss'
import { connect } from "react-redux"
import { createStructorSelector } from "reselect"

import CollectionItem from '../collection-item/collection-item.component'
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
)

export default CollectionPreview