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
                            spacing={2}
                        >
                            <Grid item xs={12}>
                                <TextField
                                    className={classes.inputs}
                                    label="E-mail"
                                    size="small"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    className={classes.inputs}
                                    label="Password"
                                    size="small"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button type="submit" className={classes.submitButton}>LOGIN</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default LogIn;