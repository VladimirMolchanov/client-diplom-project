import { createAction, createSlice } from "@reduxjs/toolkit";
import productsService from "../service/products.service";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        productsRequested: (state) => {
            state.isLoading = true;
        },
        productsReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        productsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        deleteProductSuccess: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            );
        },
        deleteProductRequestFailed: (state, action) => {
            state.error = action.payload;
        }
    }
});

const { reducer: productsReducer, actions } = productsSlice;
const {
    productsRequested,
    productsReceived,
    productsRequestFailed,
    deleteProductSuccess,
    deleteProductRequestFailed
} = actions;

const deleteProductRequested = createAction("users/deleteProductRequested");

function isOutDated(date) {
    return Date.now() - date > 10 * 60 * 1000;
}

export const loadProductsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().products;
    if (isOutDated(lastFetch)) {
        dispatch(productsRequested());
        try {
            const { content } = await productsService.getAll();
            dispatch(productsReceived(content));
        } catch (error) {
            dispatch(productsRequestFailed(error.message));
        }
    }
};

export const removeProduct = (productId) => async (dispatch) => {
    dispatch(deleteProductRequested());
    try {
        await productsService.removeProduct(productId);
        dispatch(deleteProductSuccess(productId));
    } catch (e) {
        dispatch(deleteProductRequestFailed());
    }
};

export const getProducts = () => (state) => state.products.entities;
export const getProductsLoadingStatus = () => (state) => {
    return state.products.isLoading;
};
export const getProductsByIds = (id) => (state) => {
    if (state.products.entities) {
        return state.products.entities.find((p) => p._id === id);
    }
};

export default productsReducer;
