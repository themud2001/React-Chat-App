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
        <AppBar className={classes.root}>
            <Toolbar>
                <IconButton>
                    <Menu />
                </IconButton>

                <Typography variant="h5">
                    Talky
                </Typography>
            </Toolbar>

            <Button>LOGIN</Button>
        </AppBar>
    );
};

export default Navbar;