import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Box } from 'grommet';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ThemeProvider } from 'styled-components/macro';
import { Grommet } from 'grommet';
import get from 'lodash/get';

import GlobalStyle from './styles/global';
import getTheme from './instances/getTheme';
import persistor from './instances/persistor';

import Header from './components/Header';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      theme: {},
    };
  }

  componentDidMount() {
    const activeTheme = get(this.props, 'settings.theme') || 'light';
    this.setState({ theme: getTheme(activeTheme) })
  }

  componentDidUpdate(prevProps) {
    if (get(prevProps, 'settings.theme') !== get(this.props, 'settings.theme')) {
      const activeTheme = get(this.props, 'settings.theme') || 'light';
      this.setState({ theme: getTheme(activeTheme) })
    }
  }

  render() {
    return (
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={this.state.theme}>
          <Grommet full theme={this.state.theme}>
            <>
              <GlobalStyle />
              <Box fill>
                <Header />
              </Box>
            </>
          </Grommet>
        </ThemeProvider>
      </PersistGate>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  settings: state.settings
});

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
