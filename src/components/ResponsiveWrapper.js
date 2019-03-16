import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Box, Heading, Text, ResponsiveContext } from 'grommet';

const ResponsiveWrapper = props => (
  <ResponsiveContext.Consumer>
    {size => {
      let width = '60%';
      let padding = 0;

      if (size === 'xlarge') {
        width = '80%';
      } else if (size === 'large') {
        width = '80%';
      } else if (size === 'medium') {
        width = '90%';
      } else if (size === 'small') {
        width = '100%';
        padding = 'large';
      }

      return (
        <Box
          alignSelf="center"
          width={width}
          pad={{ horizontal: padding, vertical: 'none' }}
        >
          {props.children}
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
);

ResponsiveWrapper.propTypes = {
  children: PropTypes.any,
};

export default ResponsiveWrapper;
