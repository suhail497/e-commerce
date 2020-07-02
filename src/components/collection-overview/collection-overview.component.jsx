import React from 'react';
import "./collection-overview.styles.scss"
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"
import { selectShopData } from '../../redux/shop/shop.selector';


const CollectionOverview = ({ collections }) => {
    return (
        <div className='collection-overview'>
            {
                collections.map(({ id, ...otherProps }) =>
                    (
                        <CollectionPreview key={id}  {...otherProps} />
                    )

                )}

        </div>

    );
}



const mapStatetoProps = createStructuredSelector(
    {
        collections: selectShopData
    }
)


export default connect(mapStatetoProps, null)(CollectionOverview)
