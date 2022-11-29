import React from "react";
import styled from "styled-components";
import ProjectInputField from "./ProjectInputField";

class ProjectsSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const projects = this.props.projects.map((project) => (
      <ProjectInputField
        key={project.id}
        id={project.id}
        project={project}
        onChange={this.props.onChange}
        deleteProject={this.props.deleteProject}
      ></ProjectInputField>
    ));

    return (
      <FieldsetWrapper>
        <h3>Projects:</h3>
        <SectionWrapper>{projects}</SectionWrapper>
        <AddButton type="button" onClick={this.props.addProject}>
          add project
        </AddButton>
      </FieldsetWrapper>
    );
  }
}

export default ProjectsSection;

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
