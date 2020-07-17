import { ShopActionTypes } from './shop.type';

export const updataCollections = (collectionMap) => (
    {
        type: ShopActionTypes.UPADATE_COLLECTIONS,
        payload: collectionMap
    }
)