import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/macro';
import { Box } from 'grommet';

import ResponsiveWrapper from '../components/ResponsiveWrapper';
import Section, { SectionHeader, SectionBody } from '../components/Section';

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
      <ResponsiveWrapper>
        <Box flex direction="column" gap="medium" margin={{ bottom: 'large' }}>

          {/* --- */}
          <Box>
            <Section>
              <SectionHeader
                title="Test Section"
                sideItems={['item 1', 'item 2']}
              />
              <SectionBody>
                Section contents...
              </SectionBody>
            </Section>
          </Box>

          {/* --- */}
          <Box>
            <Section>
              <SectionHeader
                title="No header background"
                background="none"
                sideItems={['side item']}
              />
              <SectionBody padTop="xsmall">
                Section contents...
              </SectionBody>
            </Section>
          </Box>

          {/* --- */}
          <Box flex direction="row" gap="small">
            <Section>
              <SectionHeader title="Sec 1" />
              <SectionBody>
                Section contents...
              </SectionBody>
            </Section>
            <Section>
              <SectionHeader title="Sec 2" />
              <SectionBody>
                Section contents...
              </SectionBody>
            </Section>
          </Box>

          {/* --- */}
          <Box flex={{ shrink: 0, grow: 0 }} direction="row" gap="small">
            <Section>
              <SectionHeader title="Sec 1" />
              <SectionBody>
                Section contents...
              </SectionBody>
            </Section>
            <Section>
              <SectionHeader title="Sec 2" />
              <SectionBody>
                Section contents...
              </SectionBody>
            </Section>
            <Section>
              <SectionHeader title="Sec 3" />
              <SectionBody>
                Section contents...
              </SectionBody>
            </Section>
          </Box>

          {/* --- */}
          <Box flex={{ shrink: 0, grow: 0 }} direction="row" gap="small">
            <Section>
              <SectionBody>
                No header
              </SectionBody>
            </Section>
          </Box>

          {/* --- */}
          <Box>
            <Section border="none">
              <SectionHeader
                pad="none"
                title="No border"
                background="none"
                sideItems={['side item']}
              />
              <SectionBody padTop="xsmall" padHorizontal="none">
                Section contents...
              </SectionBody>
            </Section>
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
