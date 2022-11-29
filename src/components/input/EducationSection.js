import React from "react";
import styled from "styled-components";
import EducationInputField from "./EducationInputField";

class EducationSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const experience = this.props.education.map((educationItem) => (
      <EducationInputField
        key={educationItem.id}
        id={educationItem.id}
        education={educationItem}
        onChange={this.props.onChange}
        deleteEducation={this.props.deleteEducation}
      ></EducationInputField>
    ));

    return (
      <FieldsetWrapper>
        <h3>Experience:</h3>
        <SectionWrapper>{experience}</SectionWrapper>
        <AddButton type="button" onClick={this.props.addEducation}>
          add education
        </AddButton>
      </FieldsetWrapper>
    );
  }
}

export default EducationSection;

const AddButton = styled.button`
  padding: 5px;
  border-radius: 5px;

  &:hover {
    background-color: lightblue;
  }
`;

const FieldsetWrapper = styled.fieldset`
  padding: 5px;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  padding: 5px;
`;
