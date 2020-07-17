import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'


const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)
export const selectCollection = memoize(collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
))


































// import { createSelector } from "reselect"
// import memoize from "lodash.memoize"

// // const COLLECTION_ID_MAP = {
// //     hats: 1,
// //     sneakers: 2,
// //     jackets: 3,
// //     womens: 4,
// //     mens: 5
// // }

// const selectShop = state => state.shop

// const selectShopData = createSelector(
//     [selectShop],
//     shop => shop.shopdata
// )

// // currying
// const selectCollection = memoize(collectionUrlParam => createSelector(
//     [selectShopData],
//     // object of key represntation  shopdata[collectionUrlParam]
//     shopdata => shopdata[collectionUrlParam]
//     // find(collection =>
//     //     collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//     // )
// )
// )

// const selectCollectionForPreview = createSelector(
//     [selectCollection],
//     // Object.keys converts object to array
//     collections => Object.keys(collections).map(key => collections[key])
// ) 


// export { selectShopData, selectCollection, selectCollectionForPreview }

