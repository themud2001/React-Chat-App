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
    inputs: {
        '& label': {
            color: '#FE6B8B',
        },
        '& label.Mui-focused': {
            color: '#FF8E53',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#FE6B8B',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FF8E53',
        }
    },
    submitButton: {
        background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
        color: "#FFF"
    }
});

export default useStyles;