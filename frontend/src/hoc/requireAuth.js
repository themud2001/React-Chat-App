import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const requireAuth = ChildComponent => {
    const ComposedComponent = props => {
        if (!props.token) {
            return <Navigate to="/signin" />
        }

        return <ChildComponent {...props} />
    };

    const mapStateToProps = state => {
        return { token: state.auth.token };
    };

    return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;