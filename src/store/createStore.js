import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import colorsReducer from "./color";
import categoryReducer from "./category";
import basketReducer from "./basket";
import usersReducer from "./users";

const rootReducer = combineReducers({
    products: productsReducer,
    colors: colorsReducer,
    category: categoryReducer,
    basket: basketReducer,
    users: usersReducer
});

export default function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
