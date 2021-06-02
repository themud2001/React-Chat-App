import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    TextField,
    Button,
    Grid,
    Paper,
    Typography,
    Divider,
    Link
} from "@material-ui/core";

import useStyles from "./styles";

const SignUp = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            className={classes.root}
            justify="center"
            alignItems="center"
        >
            <Grid
                item
                xs={10}
                sm={6}
                md={5}
                lg={4}
            >
                <Paper
                    className={classes.paper}
                    elevation={3}
                >
                    <Typography
                        className={classes.title}
                        variant="h4"
                    >Sign Up</Typography>
                    
                    <Divider
                        className={classes.divider}
                        flexItem
                    />

                    <form>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item>
                                <TextField
                                    className={classes.input}
                                    label="Username"
                                    size="small"
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    className={classes.input}
                                    label="E-mail"
                                    size="small"
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    className={classes.input}
                                    label="Password"
                                    size="small"
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    className={classes.input}
                                    label="Confirm Password"
                                    size="small"
                                />
                            </Grid>

                            <Grid item>
                                <Button type="submit" className={classes.submitButton}>SIGN UP</Button>
                            </Grid>

                            <Grid item>
                                <Link
                                    to="/login"
                                    component={RouterLink}
                                    className={classes.link}
                                    variant="overline"
                                >Already have an account?</Link>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default SignUp;