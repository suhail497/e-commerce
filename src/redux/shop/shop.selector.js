import { createSelector } from "reselect"

const selectShop = state => state.shop

const selectShopData = createSelector(
    [selectShop],
    shop => shop.shopdata
)

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectCollection = collectionUrlParam => createSelector(
    [selectShopData],
    shop => shop.find(collection =>
        collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )

)

export { selectShopData, selectCollection }

