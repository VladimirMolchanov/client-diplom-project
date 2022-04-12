import { createSlice } from "@reduxjs/toolkit";
import colorsService from "../service/colors.service";

const colorsSlice = createSlice({
    name: "colors",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        colorsRequested: (state) => {
            state.isLoading = true;
        },
        colorsReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        colorsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: colorsReducer, actions } = colorsSlice;
const { colorsRequested, colorsReceived, colorsRequestFailed } = actions;

function isOutDated(date) {
    return Date.now() - date > 10 * 60 * 1000;
}

export const loadColorsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().products;
    if (isOutDated(lastFetch)) {
        dispatch(colorsRequested());
        try {
            const { content } = await colorsService.getAll();
            dispatch(colorsReceived(content));
        } catch (error) {
            dispatch(colorsRequestFailed(error.message));
        }
    }
};

export const getColors = () => (state) => state.colors.entities;
export const getColorsLoadingStatus = () => (state) => {
    return state.colors.isLoading;
};
export const getColorsByIds = (id) => (state) => {
    if (state.colors.entities) {
        return state.colors.entities.find((p) => p._id === id);
    }
};

export default colorsReducer;
