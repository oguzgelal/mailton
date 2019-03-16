import React, { Component } from 'react';
import { Box, Text } from 'grommet';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Box fill>
        <Header />
      </Box>
    );
  }
}

export default App;
