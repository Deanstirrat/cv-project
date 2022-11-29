import React from "react";
import styled from "styled-components";
import EducationCard from "./EducationCard";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const educationCards = [];
    for (let educationItem of this.props.education) {
      educationCards.push(
        <EducationCard
          educationItem={educationItem}
          key={educationItem.id}
        ></EducationCard>
      );
    }
    return (
      <SideBarWrapper>
        <div>
          <h3>Personal Info:</h3>
          <p>{this.props.personalInfo.address}</p>
          <p>{this.props.personalInfo.phoneNumber}</p>
          <p>{this.props.personalInfo.email}</p>
        </div>
        <EducationWrapper>
          <h3>Education:</h3>
          {educationCards}
        </EducationWrapper>
      </SideBarWrapper>
    );
  }
}

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  height: 100%;
  padding: 5px;
  gap: 10px;
`;

export default SideBar;
