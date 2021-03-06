import { createAction, createSlice } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";
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
        },
        deleteColorSuccess: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            );
        },
        deleteColorRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        updateColorSuccess: (state, action) => {
            const index = state.entities.findIndex(
                (u) => u._id === action.payload._id
            );
            state.entities[index] = action.payload;
        },
        updateColorRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        createColorSuccess: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        createColorRequestFailed: (state, action) => {
            state.error = action.payload;
        }
    }
});

const { reducer: colorsReducer, actions } = colorsSlice;
const {
    colorsRequested,
    colorsReceived,
    colorsRequestFailed,
    deleteColorSuccess,
    deleteColorRequestFailed,
    updateColorSuccess,
    updateColorRequestFailed,
    createColorSuccess,
    createColorRequestFailed
} = actions;

const deleteColorRequested = createAction("users/deleteColorRequested");
const updateColorRequested = createAction("users/updateColorRequested");
const createColorRequested = createAction("users/createColorRequested");

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
            NotificationManager.error(
                error.message.toString(),
                "Loading colors"
            );
        }
    }
};

export const createColor = (payload) => async (dispatch) => {
    dispatch(createColorRequested());
    try {
        const { content } = await colorsService.create(payload);
        dispatch(createColorSuccess(content));
        NotificationManager.info("???????? ????????????????");
    } catch (error) {
        dispatch(createColorRequestFailed());
        NotificationManager.error(error.message.toString(), "Create products");
    }
};

export const removeColor = (colorId) => async (dispatch) => {
    dispatch(deleteColorRequested());
    try {
        await colorsService.removeColor(colorId);
        dispatch(deleteColorSuccess(colorId));
    } catch (error) {
        dispatch(deleteColorRequestFailed());
        NotificationManager.error(error.message.toString(), "Remove colors");
    }
};

export const updateColor = (colorId, payload) => async (dispatch) => {
    dispatch(updateColorRequested());
    try {
        const { content } = await colorsService.updateColor(colorId, payload);
        dispatch(updateColorSuccess(content));
    } catch (error) {
        dispatch(updateColorRequestFailed());
        NotificationManager.error(error.message.toString(), "Update colors");
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
