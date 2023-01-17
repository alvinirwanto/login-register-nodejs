import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import { allReducers } from "../reducers";


import { composeWithDevTools } from 'redux-devtools-extension';

function saveToLocalStorage(store) {
    try {
        const serializedStore = JSON.stringify(store);
        window && window.localStorage.setItem('store', serializedStore);
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedStore = window && window.localStorage.getItem('store')
        if (serializedStore === null) return undefined;
        return JSON.parse(serializedStore);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

const composeEnhancers = compose;
const persistedState = loadFromLocalStorage();

const store = createStore(allReducers,
    persistedState,
    composeWithDevTools(
        composeEnhancers(applyMiddleware(thunk))
    ));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;