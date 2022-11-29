import React from "react";
import styled from "styled-components";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CVHeaderWrapper>
        {this.props.personalInfo.firstName} {this.props.personalInfo.lastName}
      </CVHeaderWrapper>
    );
  }
}

const CVHeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-column: 1/3;
  background-color: orange;
  color: white;
  height: 100%;
  padding: 10px;
  font-size: 4rem;
`;

export default Header;
