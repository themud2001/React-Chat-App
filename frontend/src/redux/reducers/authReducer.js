import { SIGNIN_SUCCESS, SIGNIN_ERROR } from "../actions/types";

const INITIAL_STATE = {
    token: "",
    errorMessage: ""
};

const authReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNIN_ERROR:
            return { ...state, errorMessage: action.payload.errorMessage };
        case SIGNIN_SUCCESS:
            return { ...state, token: action.payload.token };
        default:
            return state;
    }
};

export default authReducer;