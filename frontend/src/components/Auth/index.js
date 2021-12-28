import { useEffect } from "react";
import { connect } from "react-redux";

import { refreshToken } from "../../redux/actions";

const Auth = ({ refreshToken }) => {
    useEffect(() => {
        refreshToken();
    }, []);

    return null;
};

export default connect(null, { refreshToken })(Auth);