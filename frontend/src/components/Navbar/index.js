import React from 'react';
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

                    <Typography variant="h5" className={classes.title}>
                        Talky
                    </Typography>

                    <Button className={classes.loginButton}>LOGIN</Button>
                </Toolbar>
            </AppBar>

            <Toolbar />
        </React.Fragment>
    );
};

export default Navbar;