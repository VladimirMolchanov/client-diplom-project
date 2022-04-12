import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import colorsReducer from "./color";
import categoryReducer from "./category";

const rootReducer = combineReducers({
    products: productsReducer,
    colors: colorsReducer,
    category: categoryReducer
});

export default function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
