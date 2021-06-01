import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        minHeight: "50vh",
    },
    button: {
        color: "#FFF",
        width: "15rem",
        height: "3.5rem"
    },
    signupButton: {
        background: "linear-gradient(45deg, #FE6B8B, #FF8E53)"
    },
    loginButton: {
        borderColor: "#FE6B8B",
        color: "#FE6B8B"
    },
    link: {
        textDecoration: "none"
    }
});

export default useStyles;