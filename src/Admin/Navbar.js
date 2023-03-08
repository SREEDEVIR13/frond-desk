
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@mui/material/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import Paper from '@material-ui/core/Paper';
import * as Icons from "react-icons/fa";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
  },
  loginButton: {
    marginRight: theme.spacing(2),
  },
  violet: {
    backgroundColor: '#502acd',
  },
}));
export default function MyAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.violet}>
        <Toolbar>
        <Box
         component="img"        sx={{
          height: 250,
          width: 205,
          maxHeight: { xs: 233, md: 167 },
           maxWidth: { xs: 350, md: 250 },
        }}
         alt="Logo."
         src="/Image/logo222.png" className="suyati-logo" 

       />  <Icons.FaHome  size={"5ch"} />
           <div className={classes.title}></div>
          <Paper component="form" className={classes.searchBox}>
            <IconButton className={classes.searchIcon}>
              <SearchIcon />
            </IconButton>
            <TextField
              className={classes.inputInput}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              classes={{
                root: classes.inputRoot,
              }}
            />
          </Paper>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
