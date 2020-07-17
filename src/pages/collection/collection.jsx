import React from 'react';
import "./collection.styles.scss"
import { selectCollection } from '../../redux/shop/shop.selector';
import { connect } from "react-redux"
import CollectionItem from "../../components/collection-item/collection-item.component"
import { CollectionPageContainer, CollectionTitle, ItemsContainer } from './collection.styles';



const Collection = ({ collection }) => {
    // {match}
    // console.log(match.params.collectionId) //match.params to navigate the url like http://localhost:3000/shop/hats

    const { title, items } = collection
    return (
        <CollectionPageContainer>
            <CollectionTitle>
                {title}
            </CollectionTitle>
            <ItemsContainer>
                {items.map((item) =>
                    <CollectionItem key={item.id} item={item} />
                )
                }
            </ItemsContainer>
        </CollectionPageContainer>
    );
}


const mapStateToProps = (state, ownProps) => (
    {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
)

export default connect(mapStateToProps, null)(Collection);
