import rootReducer from "./reducers/reducers"

import { createStore, compose, applyMiddleware} from "redux";
import thunk  from "redux-thunk"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(){
    const store = createStore(rootReducer, 
                composeEnhancer(applyMiddleware(thunk))
        );
    return store;
}