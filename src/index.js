import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components/macro';
import { Grommet } from 'grommet';
import App from './App';
import * as serviceWorker from './serviceWorker';
import custom from './styles/custom';
import customLight from './styles/customLight';
import customDark from './styles/customDark';
import { base, dark } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import GlobalStyle from './styles/global';

const isDark = false;

const grommetMerged = deepMerge(base, isDark ? dark : base);
const customMerged = deepMerge(custom, isDark ? customDark : customLight);
const theme = deepMerge(grommetMerged, customMerged);

console.log('theme', theme);

const root = (
  <ThemeProvider theme={theme}>
    <Grommet full theme={theme}>
      <>
        <GlobalStyle />
        <App />
      </>
    </Grommet>
  </ThemeProvider>
);

ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
