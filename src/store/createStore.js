import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import colorsReducer from "./color";
import categoryReducer from "./category";
import basketReducer from "./basket";

const rootReducer = combineReducers({
    products: productsReducer,
    colors: colorsReducer,
    category: categoryReducer,
    basket: basketReducer
});

export default function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
