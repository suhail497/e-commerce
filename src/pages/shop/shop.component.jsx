import React from 'react'
// import SHOP_DATA from './shop.data'
// import CollectionPreview from '../../components/collection-preview/collection-preview.component'
// import { connect } from 'react-redux'
// import { createStructuredSelector } from "reselect"
// import { selectShopData } from '../../redux/shop/shop.selector';
import { Route } from "react-router-dom"
import CollectionOverview from "../../components/collection-overview/collection-overview.component"
import Collection from '../collection/collection';
import { connect } from "react-redux"
import { updataCollections } from '../../redux/shop/shop.actions';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
// import collection from '../collection/collection';




class ShopComponent extends React.Component {

    unSubscribeFromSnapShot = null

    componentDidMount() {
        const { collections } = this.props
        const collectionRef = firestore.collection('collections')

        // console.log(collectionRef)

        this.unSubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot)
            collections(collectionMap)
        })
    }

    render() {
        const { match } = this.props
        return (

            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route exact path={`${match.path}/:collectionId`} component={Collection} />

            </div>

        )
    }
}


const mapDispatchToProps = dispatch => (
    {
        collections: collectionMap => dispatch(updataCollections(collectionMap))
    }
)

export default connect(null, mapDispatchToProps)(ShopComponent)








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