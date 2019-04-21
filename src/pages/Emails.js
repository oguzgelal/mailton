import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/macro';
import { Box } from 'grommet';

import ResponsiveWrapper from '../components/ResponsiveWrapper';
import Section, { SectionHeader, SectionBody } from '../components/Section';
import TreeList from '../components/TreeList';

const TagMenuContainer = styled(Box)`
  min-width: 220px;
`;

const ContentsContainer = styled(Box)`
`;

class Emails extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  componentDidMount() {
    console.log('emails mounted')
  }

  render() {
    return (
      <ResponsiveWrapper fill="vertical">
        <Box flex fill direction="row">
          {/* tree list */}
          <TagMenuContainer flex={{ shrink: 0 }} fill="vertical">
            <TreeList />
          </TagMenuContainer>
          {/* contents */}
          <Box flex={{ grow: 1, shrink: 0 }} fill="vertical">
          </Box>
        </Box>
      </ResponsiveWrapper>
    );
  }
}

Emails.propTypes = {
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
)(Emails);
