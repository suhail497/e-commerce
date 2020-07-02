import React from 'react'
// import SHOP_DATA from './shop.data'
// import CollectionPreview from '../../components/collection-preview/collection-preview.component'
// import { connect } from 'react-redux'
// import { createStructuredSelector } from "reselect"
// import { selectShopData } from '../../redux/shop/shop.selector';
import { Route } from "react-router-dom"
import CollectionOverview from "../../components/collection-overview/collection-overview.component"
import Collection from '../collection/collection';

const ShopComponent = ({ match }) => {
    console.log(match)
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route exact path={`${match.path}/:collectionId`} component={Collection} />

        </div>

    );
}


// const mapStatetoProps = createStructuredSelector(
//     {
//         collections: selectShopData
//     }
// )

export default ShopComponent








// class ShopPage extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             collections: SHOP_DATA
//         }
//     }

//     render(){
//         const {collections} = this.state
//         return (
//             <div className='shop-page'>
//                 {collections.map(({id, ...otherCollectionProps}) =>
//                     (
//                         <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
//                     )
//                 )}
//             </div>
//         )
//     }
// }

// export default ShopPage