import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export default function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
