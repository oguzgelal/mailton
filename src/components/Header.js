import React from 'react';
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

import { ROUTE_EMAILS, ROUTE_RULES, ROUTE_ACCOUNT } from '../Routes';

import * as settingsActions from '../redux/settings';
import history from '../instances/history';
import themeSwitch from '../utils/themeSwitch';
import getColor from '../utils/getColor';
import getSize from '../utils/getSize';
import navigate from '../utils/navigate';
import isPageActive from '../utils/isPageActive';

const SlideoutLayer = styled(Layer)`
  position: fixed;
  top: 0;
  right: 0;
  width: 80% !important;
  border-radius: 0;
  z-index: 9;
`;

const SlideoutButton = styled(Button).attrs({
  reverse: true
})`
  padding: ${p => getSize(p, 'small')} !important;
  border-bottom: 1px solid ${p => getColor(p, `${p.activeTheme}-1`)};
  & > div { justify-content: flex-start; }
`;


class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      sidebarOpen: false,
    };
  }

  componentDidMount() {
    history.listen(() => this.forceUpdate());
  }

  render() {
    const items = [
      {
        id: 'emails',
        label: 'Emails',
        active: isPageActive(ROUTE_EMAILS),
        onClick: () => {
          navigate(ROUTE_EMAILS);
          this.setState({ sidebarOpen: false })
        },
      },
      {
        id: 'rules',
        label: 'Rules',
        active: isPageActive(ROUTE_RULES),
        onClick: () => {
          navigate(ROUTE_RULES);
          this.setState({ sidebarOpen: false })
        },
      },
      {
        id: 'account',
        label: 'Account',
        active: isPageActive(ROUTE_ACCOUNT),
        onClick: () => {
          navigate(ROUTE_ACCOUNT);
          this.setState({ sidebarOpen: false })
        },
      },
      {
        id: 'theme',
        icon: themeSwitch(this.props, <IconSun />, <IconMoon />),
        slideoutLabel: 'Theme',
        onClick: () => this.props.settingsActions.changeTheme(
          themeSwitch(this.props, 'dark', 'light')
        )
      }
    ];

    return (
      <>
        {this.state.sidebarOpen && (
          <SlideoutLayer
            full="vertical"
            position="right"
            responsive={false}
            onClickOutside={() => this.setState({ sidebarOpen: false })}
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
                      active={item.active}
                      icon={item.icon || item.slideoutIcon}
                      onClick={item.onClick}
                      hoverIndicator={themeSwitch(this.props, 'light-1', 'dark-1')}
                      activeTheme={themeSwitch(this.props, 'light', 'dark')}
                      label={(
                        <Box flex="grow">
                          <Text>
                            {item.label || item.slideoutLabel}
                          </Text>
                        </Box>
                      )}
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
                align="center"
                direction="row"
                pad="none"
                height="100px"
              >
                <Box flex="grow" height="100%" justify="center">
                  <Heading level="2" margin="none">Mailton</Heading>
                </Box>
                {size === 'small' && (
                  <Box height="100%" justify="center">
                    <ButtonPlain
                      icon={<IconMenu />}
                      onClick={() => this.setState({ sidebarOpen: true })}
                    />
                  </Box>
                )}
                {size !== 'small' && items.map(item => (
                  <Box key={`header-${item.id}`} height="100%" justify="center" margin={{ left: '3px' }}>
                    <ButtonPlain
                      icon={item.icon}
                      label={isNil(item.label) ? null : <Text size="medium">{item.label}</Text>}
                      onClick={item.onClick}
                      active={item.active}
                    />
                  </Box>
                ))}
              </Box>
            )}
          </ResponsiveContext.Consumer>
        </ResponsiveWrapper>
      </>
    );

  }
}

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
