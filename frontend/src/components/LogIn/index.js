import React from "react";
import {
    TextField,
    Button,
    Grid,
    Paper,
    Typography,
    Divider
} from "@material-ui/core";

import useStyles from "./styles";

const LogIn = () => {
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
                    >Log In</Typography>
                    
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
                            spacing={4}
                        >
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
                                <Button type="submit" className={classes.submitButton}>LOG IN</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default LogIn;