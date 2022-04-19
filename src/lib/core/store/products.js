import { createAction, createSlice } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";
import productsService from "../service/products.service";
import history from "../utils/history";

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
        },
        updateProductSuccess: (state, action) => {
            const index = state.entities.findIndex(
                (u) => u._id === action.payload._id
            );
            state.entities[index] = action.payload;
        },
        updateProductRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        createProductSuccess: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        createProductRequestFailed: (state, action) => {
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
    deleteProductRequestFailed,
    updateProductSuccess,
    updateProductRequestFailed,
    createProductSuccess,
    createProductRequestFailed
} = actions;

const createProductRequested = createAction("users/createProductRequested");
const deleteProductRequested = createAction("users/deleteProductRequested");
const updateProductRequested = createAction("users/updateProductRequested");

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

export const createProduct = (payload) => async (dispatch) => {
    dispatch(createProductRequested());
    try {
        const { content } = await productsService.create(payload);
        dispatch(createProductSuccess(content));
        NotificationManager.info("Продукт добавлен");
        history.push("/admin/products");
    } catch (error) {
        dispatch(createProductRequestFailed());
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

export const updateProduct = (productId, payload) => async (dispatch) => {
    dispatch(updateProductRequested());
    try {
        const { content } = await productsService.updateProduct(
            productId,
            payload
        );
        dispatch(updateProductSuccess(content));
        NotificationManager.info("Сохраненно");
    } catch (e) {
        dispatch(updateProductRequestFailed());
        NotificationManager.error("Ошибка");
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
