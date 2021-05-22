import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const Navbar = () => {
    return (
        <AppBar>
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