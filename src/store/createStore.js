import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";

const rootReducer = combineReducers({
    products: productsReducer
});

export default function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
