//combining all reducers 

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';
import { persistReducer } from "redux-persist" //session storage


// Actual Local storage object on our window browser
// As we will be telling to use local storage as default storage
// You can also find the sessionStorage from redux persist library
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


const persistConfig = {
    key: 'root',   //main object
    storage: storage,
    whitelist: ['cart']  //reducer
}


const rootReducer = combineReducers(
    {
        user: userReducer,
        cart: cartReducer,
        directory: directoryReducer,
        shop: shopReducer
    }
)

export default persistReducer(persistConfig, rootReducer)