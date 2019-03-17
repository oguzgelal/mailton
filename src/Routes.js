import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Route, Redirect } from "react-router-dom";
import styled from 'styled-components/macro';
import { Box } from 'grommet';

import history from './instances/history';
import Header from './components/Header';
import Emails from './pages/Emails';
import Rules from './pages/Rules';
import Account from './pages/Account';

export const ROUTE_EMAILS = 'emails';
export const ROUTE_RULES = 'rules';
export const ROUTE_ACCOUNT = 'account';
export const ROUTE_DEFAULT = ROUTE_EMAILS;

class Routes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  componentDidMount() {
    history.listen(() => this.forceUpdate());
  }

  render() {
    return (
      <Router history={history}>
        <Box fill flex direction="column">
          {/* header */}
          <Box flex={{ grow: 0, shrink: 0 }}>
            <Header />
          </Box>
          {/* contents */}
          <Box flex="grow">
            <Route exact path="/" render={() => <Redirect to={`/${ROUTE_DEFAULT}`} />} />
            <Route exact path={`/${ROUTE_EMAILS}`} component={Emails} />
            <Route exact path={`/${ROUTE_RULES}`} component={Rules} />
            <Route exact path={`/${ROUTE_ACCOUNT}`} component={Account} />
          </Box>
        </Box>
      </Router>
    );
  }
}

Routes.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
  // authors: state.authors
});

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);
