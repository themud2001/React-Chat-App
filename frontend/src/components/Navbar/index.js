import React from 'react';
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Grid
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import useStyles from "./styles";

const Navbar = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar className={classes.root}>
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                    >
                        <Grid
                            item
                            container
                            xs={6}
                            alignItems="center"
                        >
                            <Grid item>
                                <IconButton className={classes.menuIcon}>
                                    <Menu />
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <Typography
                                    component={Link}
                                    to="/"
                                    variant="h5"
                                    className={classes.title}
                                >
                                    Talky
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            item
                            container
                            xs={6}
                            justify="flex-end"
                        >
                            <Grid item>
                                <Button
                                    component={Link}
                                    to="/login"
                                    className={classes.loginButton}
                                >LOGIN</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Toolbar />
        </React.Fragment>
    );
};

export default Navbar;