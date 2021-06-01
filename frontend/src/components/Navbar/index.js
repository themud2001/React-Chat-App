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
                            </Grid>
                        </Grid>

                        <Grid
                            item
                            container
                            xs={6}
                            justify="flex-end"
                        >
                            <Grid item>
                                <Link
                                    to="/login"
                                    className={classes.link}
                                >
                                    <Button className={classes.loginButton}>
                                        LOGIN
                                    </Button>
                                </Link>
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