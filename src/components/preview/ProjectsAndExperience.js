import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import ExperienceCard from "./ExperienceCard";

class ProjectsAndExperience extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const projects = [];
    for (let project of this.props.projects) {
      projects.push(
        <ProjectCard project={project} key={project.id}></ProjectCard>
      );
    }
    const experience = [];
    for (let experienceItem of this.props.experience) {
      experience.push(
        <ExperienceCard
          experience={experienceItem}
          key={experienceItem.id}
        ></ExperienceCard>
      );
    }
    return (
      <ProjectsWrapper>
        <h3>Projects:</h3>
        {projects}
        <h3>Experience:</h3>
        {experience}
      </ProjectsWrapper>
    );
  }
}

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  background-color: lightgray;
`;

export default ProjectsAndExperience;
