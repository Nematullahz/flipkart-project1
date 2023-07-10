
import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { getproductReducer,getProductDetailsReducer } from './reducer/productReducer';
import { cartReducer } from './reducer/CartReducer';

const reducer = combineReducers(
    {
        getproducts:getproductReducer,
        getproductDetails:getProductDetailsReducer,
        cart:cartReducer
    }
)
const middleware = [thunk];
const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default Store