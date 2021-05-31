import React from 'react';
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import useStyles from "./styles";

const Navbar = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar className={classes.root}>
                <Toolbar>
                    <IconButton className={classes.menuIcon}>
                        <Menu />
                    </IconButton>

                    <Link
                        to="/"
                        className={`${classes.link} ${classes.title}`}
                    >
                        <Typography
                            variant="h5"
                            className={classes.title}
                        >
                            Talky
                        </Typography>
                    </Link>

                    <Link
                        to="/login"
                        className={classes.link}
                    >
                        <Button className={classes.loginButton}>
                            LOGIN
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>

            <Toolbar />
        </React.Fragment>
    );
};

export default Navbar;