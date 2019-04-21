import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/macro';
import { Collapsible, Button, Box, Text, MenuButton } from 'grommet';
import { FormDown, FormNext } from 'grommet-icons';

const Wrapper = styled.div``;


const Item = styled(Button)`
  padding-bottom: 8px;
`;

const ItemIconWrapper = styled(Box)`
  svg {
    width: 14px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

class TreeList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      openMenu1: false,
      openSubmenu1: false,
      openMenu2: false
    };
  }

  render() {

    const { openMenu1, openSubmenu1, openMenu2 } = this.state;

    const MenuButton = ({ label, open, submenu, ...rest }) => {
      const Icon = open ? FormDown : FormNext;
      return (
        <Item {...rest}>
          <Box
            flex
            margin={submenu ? { left: "small" } : undefined}
            direction="row"
            align="center"
          >
            <Box flex="grow">
              <Text>{label}</Text>
            </Box>
            <ItemIconWrapper><Icon /></ItemIconWrapper>
          </Box>
        </Item>
      );
    };

    return (
      <Box width="100%">
        <MenuButton
          open={openMenu1}
          label="Accordion"
          onClick={() => {
            const newOpenMenu1 = !openMenu1;

            this.setState({
              openMenu1: newOpenMenu1,
              openSubmenu1: !newOpenMenu1 ? false : openSubmenu1
            });
          }}
        />
        <Collapsible open={openMenu1}>
          <MenuButton
            submenu
            open={openSubmenu1}
            label="Accordion Basics"
            onClick={() => this.setState({ openSubmenu1: !openSubmenu1 })}
          />
          <Collapsible open={openSubmenu1}>
            {}
            <Button
              hoverIndicator="background"
              onClick={() => alert("Submenu item 1 selected")}
            >
              <Box
                margin={{ left: "medium" }}
                direction="row"
                align="center"
              >
                <Text>Submenu item 1</Text>
              </Box>
            </Button>
            <Button
              hoverIndicator="background"
              onClick={() => alert("Submenu item 2 selected")}
            >
              <Box
                margin={{ left: "medium" }}
                direction="row"
                align="center"
              >
                <Text>Submenu item 2</Text>
              </Box>
            </Button>
            {}
          </Collapsible>
        </Collapsible>
        <MenuButton
          open={openMenu2}
          label="Button"
          onClick={() => this.setState({ openMenu2: !openMenu2 })}
        />
        <Collapsible open={openMenu2}>
          {}
          <Button
            hoverIndicator="background"
            onClick={() => alert("Submenu item 1 selected")}
          >
            <Box
              margin={{ left: "medium" }}
              direction="row"
              align="center"
            >
              <Text>Submenu item 1</Text>
            </Box>
          </Button>
          {}
        </Collapsible>
      </Box>
    );
  }
}

TreeList.propTypes = {
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
)(TreeList);
