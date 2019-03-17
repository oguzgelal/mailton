import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isNil from 'lodash/isNil';
import { Box, Text } from 'grommet';

import themeSwitch from '../utils/themeSwitch';
import getSize from '../utils/getSize';

const SectionWrapper = styled(Box)`
  border-radius: ${p => getSize(p, 'xsmall')};
`;

const SectionBodyWrapper = styled(Box)`
  min-height: ${p => getSize(p, 'small')}
`;

// Section
const _Section = ({ children, ...rest }) => (
  <SectionWrapper
    flex={{ shrink: 1, grow: 1 }}
    direction="column"
    {...rest}
    pad="none"
    border={(isNil(rest.border) || rest.border === 'none') ? null : {
      size: 'small',
      color: themeSwitch(rest, 'light-2', 'dark-1')
    }}
  >
    {children}
  </SectionWrapper>
);

// Section Header
const _SectionHeader = ({
  children,
  title,
  titlePrefixItems = [],
  titleSuffixItems = [],
  sideItems = [],
  ...rest
}) => {
  if (children) return children;
  return (
    <Box
      flex={{ shrink: 0 }}
      direction="row"
      height="xxsmall"
      background={themeSwitch(rest, 'light-2', 'dark-1')}
      pad={{
        horizontal: "medium",
        vertical: "none"
      }}
      {...rest}
    >
      <Box
        height="100%"
        align="center"
        justify="start"
        flex="grow"
        direction="row"
        gap={(titlePrefixItems.length === 0 && titleSuffixItems.length === 0) ? 'none' : 'small'}
      >
        {titlePrefixItems.map((item, i) => (
          <Box key={`section-title-p-item-${i}`}>{item}</Box>
        ))}
        <Box>
          {!isNil(title) && (
            <Text size="medium" weight="500">{title}</Text>
          )}
        </Box>
        {titleSuffixItems.map((item, i) => (
          <Box key={`section-title-s-item-${i}`}>{item}</Box>
        ))}
      </Box>
      <Box
        height="100%"
        align="center"
        justify="start"
        flex={{ shrink: 0 }}
        direction="row"
        gap={sideItems.length === 0 ? 'none' : 'small'}
      >
        {sideItems.map((item, i) => (
          <Box key={`section-side-item-${i}`}>{item}</Box>
        ))}
      </Box>
    </Box>
  )
};

// Section Body
const _SectionBody = ({
  children,
  padHorizontal,
  padVertical,
  padTop,
  padBottom,
  padLeft,
  padRight,
  ...rest
}) => {

  const pads = {};
  const padDefault = 'medium';

  // horizontal
  if (!isNil(padTop) || !isNil(padBottom)) {
    pads['top'] = padTop || padDefault;
    pads['bottom'] = padBottom || padDefault;
  } else {
    pads['vertical'] = padVertical || padDefault;
  }

  // padVertical
  if (!isNil(padLeft) || !isNil(padRight)) {
    pads['left'] = padLeft || padDefault;
    pads['right'] = padRight || padDefault;
  } else {
    pads['horizontal'] = padHorizontal || padDefault;
  }

  return (
    <SectionBodyWrapper
      {...rest}
      flex={{ grow: 1, shrink: 1 }}
      pad={!isNil(rest.pad) ? rest.pad : pads}
    >
      {children}
    </SectionBodyWrapper>
  );
};

// map state / dispatch to props

const mapStateToProps = (state, ownProps) => ({
  settings: state.settings
});

const mapDispatchToProps = dispatch => ({
  //actions: bindActionCreators(actions, dispatch)
});

// props
const propTypesCommon = {
  settings: PropTypes.object
};

_Section.propTypes = {
  ...propTypesCommon
};

_SectionHeader.propTypes = {
  ...propTypesCommon,
  title: PropTypes.any,
  titleSuffixItems: PropTypes.array,
  titlePrefixItems: PropTypes.array,
  sideItems: PropTypes.array,
};

_SectionBody.propTypes = {
  ...propTypesCommon,
  padHorizontal: PropTypes.string,
  padVertical: PropTypes.string,
  padTop: PropTypes.string,
  padBottom: PropTypes.string,
  padLeft: PropTypes.string,
  padRight: PropTypes.string,
};

// default props
_Section.defaultProps = {
  border: true
}

_SectionHeader.defaultProps = {
  titleSuffixItems: [],
  titlePrefixItems: [],
  siteItems: [],
}

// exports
const connectCommon = connect(mapStateToProps, mapDispatchToProps);
export const SectionHeader = connectCommon(_SectionHeader);
export const SectionBody = connectCommon(_SectionBody);
export default connectCommon(_Section);
