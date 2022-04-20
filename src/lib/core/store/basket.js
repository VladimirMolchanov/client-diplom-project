import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../service/localStorageService";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        entities: []
    },
    reducers: {
        getStorageBasket: (state) => {
            state.entities =
                JSON.parse(localStorageService.get("basket")) || [];
        },
        deleteProduct: (state, action) => {
            state.entities = state.entities.filter(
                (product) => product._id !== action.payload
            );
            localStorageService.set("basket", JSON.stringify(state.entities));
        },
        addProduct: (state, action) => {
            const index = state.entities.findIndex(
                (i) => i._id === action.payload._id
            );
            if (index !== -1) {
                state.entities[index].count += 1;
            } else {
                const newProduct = {
                    ...action.payload,
                    count: 1
                };
                state.entities = [...state.entities, newProduct];
            }
            localStorageService.set("basket", JSON.stringify(state.entities));
        },
        countProduct: (state, action) => {
            const index = state.entities.findIndex(
                (i) => i._id === action.payload._id
            );

            if (index !== -1) {
                state.entities[index].count = action.payload.value;
            }

            localStorageService.set("basket", JSON.stringify(state.entities));
        }
    }
});

const { reducer: basketReducer, actions } = basketSlice;
const { addProduct, getStorageBasket, deleteProduct, countProduct } = actions;

export const loadBasketList = () => (dispatch) => {
    dispatch(getStorageBasket());
};
export const deleteBasketProduct = (id) => (dispatch) => {
    dispatch(deleteProduct(id));
};

export const addBasketProduct = (product) => (dispatch) => {
    dispatch(addProduct(product));
};

export const countedProduct = (count) => (dispatch) => {
    dispatch(countProduct(count));
};

export const getBasket = () => (state) => state.basket.entities;

export default basketReducer;
