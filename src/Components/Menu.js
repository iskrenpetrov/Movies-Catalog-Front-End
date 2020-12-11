import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from './Drawer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        transform: 'translate(-2%,-15%)',
        width: '120%',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Drawer />
                    <Typography variant="h6" className={classes.title}>
                        Catalog for browsing movies
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
