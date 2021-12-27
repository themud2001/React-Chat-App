import api from "../../apis/api";
import { SIGNIN_SUCCESS, SIGNIN_ERROR } from "./types";

export const signInSuccess = payload => {
    return {
        type: SIGNIN_SUCCESS,
        payload
    };
};

export const signInError = payload => {
    return {
        type: SIGNIN_ERROR,
        payload
    };
};

export const signIn = (formData, callback) => async dispatch => {
    try {
        const { data } = await api.post("/auth/signin", formData);
        
        dispatch(signInSuccess(data));
        callback();
    } catch ({ response }) {
        dispatch(signInError(response.data));
    }
};