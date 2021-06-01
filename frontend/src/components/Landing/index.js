import React from "react";
import { Link } from "react-router-dom";
import {
    Paper,
    Button,
    Grid,
    Typography
} from "@material-ui/core";

import useStyles from "./styles";

// TODO: Fix the links
const Landing = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.root}
        >
            <Grid
                item
                xs={10}
                sm={6}
                md={5}
                lg={4}
            >
                <Paper elevation={3} square>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item>
                            <Button className={`${classes.button} ${classes.signupButton}`}>SIGN UP</Button>
                        </Grid>

                        <Grid item>
                            <Button
                                className={`${classes.button} ${classes.loginButton}`}
                                variant="outlined"
                            >LOG IN</Button>
                        </Grid>

                        <Grid item>
                            <Typography variant="h6">or</Typography>
                        </Grid>

                        <Grid item>
                            <Link
                                to="/chat"
                                className={classes.link}
                            >
                                <Button>Continue as a guest</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Landing;