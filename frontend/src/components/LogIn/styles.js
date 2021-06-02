import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        minHeight: "80vh"
    },
    paper: {
        padding: "10vh 5vw"
    },
    title: {
        textAlign: "center"
    },
    divider: {
        width: "100%",
        height: "1px",
        margin: "10px 0 20px 0"
    },
    input: {
        width: "15rem",
        '& label': {
            color: '#FE6B8B',
        },
        '& label.Mui-focused': {
            color: '#FE6B8B',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FE6B8B',
        }
    },
    submitButton: {
        background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
        color: "#FFF",
        width: "15rem",
        height: "3rem"
    },
    link: {
        color: "#000",
        textDecoration: "underline"
    }
});

export default useStyles;