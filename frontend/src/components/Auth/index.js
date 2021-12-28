import { useEffect } from "react";
import { connect } from "react-redux";

import { refreshToken } from "../../redux/actions";

const Auth = ({ refreshToken }) => {
    useEffect(() => {
        refreshToken();

        // A timer that refreshes the token automatically
        // every 14 minutes (1 minute less than the expiry of the access token)
        const timer = setInterval(() => {
            refreshToken();
        }, 14 * 60 * 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return null;
};

export default connect(null, { refreshToken })(Auth);