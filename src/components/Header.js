import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 50,
    color: "black"
  },
  back: {
    borderBottom: 2,
    backgroundColor: "white",
    borderBottomStyle: "solid",
    borderBottomColor: "black",
    paddingTop: 10,
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.back} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CAR UNIVERSE 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}