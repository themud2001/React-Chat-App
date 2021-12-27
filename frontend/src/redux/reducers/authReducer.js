import { AUTH_SUCCESS, AUTH_ERROR } from "../actions/types";

const INITIAL_STATE = {
    token: "",
    errorMessage: ""
};

const authReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload.errorMessage };
        case AUTH_SUCCESS:
            return { ...state, token: action.payload.token, user: action.payload.user };
        default:
            return state;
    }
};

export default authReducer;