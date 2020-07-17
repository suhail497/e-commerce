import React from 'react';
import "./collection-overview.styles.scss"
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import { CollectionOverViewContainer } from './collection-overview.styles';



const CollectionOverview = ({ collections }) => {
    console.log(collections)
    return (
        <CollectionOverViewContainer>
            {
                collections.map(({ id, ...otherProps }) =>
                    (
                        <CollectionPreview key={id}  {...otherProps} />
                    )

                )}

        </CollectionOverViewContainer>

    );
}



const mapStatetoProps = createStructuredSelector(
    {
        collections: selectCollectionsForPreview
    }
)


export default connect(mapStatetoProps, null)(CollectionOverview)
