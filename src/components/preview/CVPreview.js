import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ProjectsAndExperience from "./ProjectsAndExperience";
import SideBar from "./SideBar";

class CVPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CVPreviewWrapper>
        <Header personalInfo={this.props.cv.personalInfo} />
        <SideBar
          personalInfo={this.props.cv.personalInfo}
          education={this.props.cv.education}
        />
        <ProjectsAndExperience
          projects={this.props.cv.projects}
          experience={this.props.cv.experience}
        />
      </CVPreviewWrapper>
    );
  }
}

export default CVPreview;

const CVPreviewWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 80px;
  align-items: top;
  gap: 1rem;
  background-color: white;
  width: 800px;
  height: 1035px;
`;
