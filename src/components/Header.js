import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/macro';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { Layer, Button, Box, Heading, ResponsiveContext, Text } from 'grommet';

import IconMenu from 'react-feather/dist/icons/menu';
import IconSun from 'react-feather/dist/icons/sun';
import IconMoon from 'react-feather/dist/icons/moon';

import ResponsiveWrapper from './ResponsiveWrapper';
import ButtonPlain from './ButtonPlain';

import * as settingsActions from '../redux/settings';
import themeSwitch from '../utils/themeSwitch';
import getColor from '../utils/getColor';
import getSize from '../utils/getSize';

const SlideoutLayer = styled(Layer)`
  position: fixed;
  top: 0;
  right: 0;
  width: 80% !important;
  border-radius: 0;
  z-index: 9;
`;

const SlideoutButton = styled(Button)`
  padding: ${p => getSize(p, 'small')} !important;
  border-bottom: 1px solid ${p => getColor(p, `${p.activeTheme}-1`)};
  & > div { justify-content: flex-start; }
`;

const Header = props => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const items = [
    {
      id: 'emails',
      label: 'Emails',
    },
    {
      id: 'rules',
      label: 'Rules',
    },
    {
      id: 'account',
      label: 'Account',
    },
    {
      id: 'theme',
      icon: themeSwitch(props, <IconSun />, <IconMoon />),
      slideoutLabel: 'Theme',
      onClick: () => props.settingsActions.changeTheme(
        themeSwitch(props, 'dark', 'light')
      )
    }
  ];

  return (
    <>
      {sidebarOpen && (
        <SlideoutLayer
          full="vertical"
          position="right"
          responsive={false}
          onClickOutside={() => setSidebarOpen(false)}
        >
          <Box
            flex
            direction="column"
            pad="large"
          >
            {items.map(item => {
              return (
                <Box
                  key={`slideout-${item.id}`}
                  pad="none"
                  full="horizontal"
                >
                  <SlideoutButton
                    fill
                    plain
                    label={item.label || item.slideoutLabel}
                    icon={item.icon || item.slideoutIcon}
                    onClick={item.onClick}
                    hoverIndicator={themeSwitch(props, 'light-1', 'dark-1')}
                    activeTheme={themeSwitch(props, 'light', 'dark')}
                  />
                </Box>
              )
            })}
          </Box>

        </SlideoutLayer>
      )}
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
              {size === 'small' && (
                <Box height="100%" justify="center">
                  <ButtonPlain
                    icon={<IconMenu />}
                    onClick={() => setSidebarOpen(true)}
                  />
                </Box>
              )}
              {size !== 'small' && items.map(item => (
                <Box key={`header-${item.id}`} height="100%" justify="center">
                  <ButtonPlain
                    icon={item.icon}
                    label={isNil(item.label) ? null : <Text size="medium">{item.label}</Text>}
                    onClick={item.onClick}
                  />
                </Box>
              ))}
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </ResponsiveWrapper>
    </>
  )
};

Header.propTypes = {
  settings: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  settings: state.settings
});

const mapDispatchToProps = dispatch => ({
  settingsActions: bindActionCreators(settingsActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
