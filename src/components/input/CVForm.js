import React from "react";
import styled from "styled-components";
import PersonalSection from "./PersonalSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";

class CVForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FormWrapper>
        <form>
          <PersonalSection
            personalInfo={this.props.cv.personalInfo}
            onChange={this.props.onChangePersonal}
          />
          <EducationSection
            education={this.props.cv.education}
            onChange={this.props.onChangeExperience}
            addEducation={this.props.addEducation}
            deleteEducation={this.props.deleteEducation}
          />
          <ProjectsSection
            projects={this.props.cv.projects}
            onChange={this.props.onChangeProjects}
            addProject={this.props.addProject}
            deleteProject={this.props.deleteProject}
          />
          <ExperienceSection
            experience={this.props.cv.experience}
            onChange={this.props.onChangeExperience}
            addExperience={this.props.addExperience}
            deleteExperience={this.props.deleteExperience}
          />
        </form>
      </FormWrapper>
    );
  }
}

export default CVForm;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 800px;
`;
