import React from "react";
import styled from "styled-components";
import ExperienceInputField from "./ExperienceInputField";

class ExperienceSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const experience = this.props.experience.map((experienceItem) => (
      <ExperienceInputField
        key={experienceItem.id}
        id={experienceItem.id}
        experience={experienceItem}
        onChange={this.props.onChange}
        deleteExperience={this.props.deleteExperience}
      ></ExperienceInputField>
    ));

    return (
      <FieldsetWrapper>
        <h3>Experience:</h3>
        <SectionWrapper>{experience}</SectionWrapper>
        <AddButton type="button" onClick={this.props.addExperience}>
          add possition
        </AddButton>
      </FieldsetWrapper>
    );
  }
}

export default ExperienceSection;

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
