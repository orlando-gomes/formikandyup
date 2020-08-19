import { createGlobalStyle } from 'styled-components';

// import { createMuiTheme } from '@material-ui/core/styles';
// import 'react-toastify/dist/ReactToastify.css';

// import 'react-perfect-scrollbar/dist/css/styles.css';
export default createGlobalStyle`
  /*
  Imported by tag link into the <head> of index.html
  CSS rules to specify families
    font-family: 'Source Sans Pro', sans-serif;
  */

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    /*outline: 0; */
  }

  html, body, #root {
    /*background: #ffffff; */
  }

  html {
    /**font-size: 62.5%; */
  }

  body {
    /*-webkit-font-smoothing: antialiased; */
  }

  body, input, button, textarea {
    /*font: 20px 'Source Sans Pro', sans-serif; */
  }
  /*
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
  */
`;
/*
export const globalTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3ea6ff',
    },
    background: {
      default: '#232323',
      dark: '#181818',
      paper: '#232323',
    },
  },
});
*/
/*
export const globalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3f51b5',
    },
    background: {
      default: '#0f0',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          padding: '0px',
          margin: '0px',
          background: '#00f',
        },
      },
    },
  },
});
*/
