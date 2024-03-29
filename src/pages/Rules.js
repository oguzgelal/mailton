import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/macro';

import ResponsiveWrapper from '../components/ResponsiveWrapper';

class Rules extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  componentDidMount() {
    console.log('rules mounted')
  }

  render() {
    return (
      <ResponsiveWrapper>
        Rules
      </ResponsiveWrapper>
    );
  }
}

Rules.propTypes = {
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
)(Rules);
