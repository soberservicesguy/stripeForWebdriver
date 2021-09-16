import './Globals';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import loadable from '@loadable/component';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
var mixpanel = require('mixpanel-browser');

const theme = createMuiTheme({
  palette: {
    primary: {
      main: global.blue,
      contrastText: 'white',
    },
    secondary: {
      main: global.green,
      contrastText: 'white',
    },
  },
  overrides: {
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: global.blue,
        },
        '&$active': {
          color: global.green,
        },
      },
      active: {},
      completed: {},
    },
  },
});

const AsyncSettingsScreen = loadable(() => import('./Screens/Settings'));


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
    };
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router id="outer-container1">
          <div>

            <Route path="/" component={AsyncSettingsScreen} />

          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const useStyles = makeStyles(theme => ({
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(0),
      marginLeft: 76,
      //hack to allowe space for the collapsed drawer
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    },
  }));

  const classes = useStyles();
  return (
    <Route
      {...rest}
      render={props =>
        <div>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Component {...props} />
          </main>
        </div>
      }
    />
  );
};