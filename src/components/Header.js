import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Box, Heading, ResponsiveContext, Text } from 'grommet';
import ResponsiveWrapper from './ResponsiveWrapper';
import ButtonPlain from './ButtonPlain';

const items = [
  {
    id: 'emails',
    type: 'button',
    label: 'Emails',
  },
  {
    id: 'rules',
    type: 'button',
    label: 'Rules',
  }
];

const Header = props => (
  <ResponsiveWrapper>
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          flex
          align="start"
          justify="center"
          direction="row"
          pad="none"
        >
          <Box flex="grow">
            <Heading level="2">Mailton</Heading>
          </Box>

          {size !== 'small' && items.map(item => (
            <Box key={item.id} height="100%" justify="center">
              {item.type === 'button' && (
                <ButtonPlain
                  label={<Text size="medium">{item.label}</Text>}
                  onClick={item.onClick}
                />
              )}
            </Box>
          ))}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </ResponsiveWrapper>
);

Header.propTypes = {
};

export default Header;
