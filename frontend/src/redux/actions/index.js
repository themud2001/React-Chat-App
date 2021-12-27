import api from "../../apis/api";
import { AUTH_SUCCESS, AUTH_ERROR } from "./types";

export const authSuccess = payload => {
    return {
        type: AUTH_SUCCESS,
        payload
    };
};

export const authError = payload => {
    return {
        type: AUTH_ERROR,
        payload
    };
};

export const signIn = (formData, callback) => async dispatch => {
    try {
        const { data } = await api.post("/auth/signin", formData);
        
        dispatch(authSuccess(data));
        if (callback) callback()
    } catch ({ response }) {
        dispatch(authError(response.data));
    }
};

export const signUp = (formData, callback) => async dispatch => {
    try {
        const { data } = await api.post("/auth/signup", formData);

        dispatch(authSuccess(data));
        if (callback) callback();
    } catch ({ response }) {
        dispatch(authError(response.data));
    }
};