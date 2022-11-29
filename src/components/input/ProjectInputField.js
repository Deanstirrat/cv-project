import React from "react";
import styled from "styled-components";
import trash from "../../assets/trash-bin.png";

class ProjectInputField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ProjectInputFieldWrapper>
        <TitleLabel>
          Project title:
          <input
            type="text"
            name="title"
            placeholder="Project title"
            value={this.props.project.title}
            onChange={(e) => this.props.onChange(e, this.props.id)}
          />
        </TitleLabel>
        <DescriptionLabel>
          Description:
          <DescriptionArea
            name="description"
            placeholder="descibe your project..."
            value={this.props.project.description}
            onChange={(e) => this.props.onChange(e, this.props.id)}
          />
        </DescriptionLabel>
        <DateLabel>
          Start Date:
          <input
            type="date"
            name="from"
            value={this.props.project.from}
            onChange={(e) => this.props.onChange(e, this.props.id)}
          />
        </DateLabel>
        <DateLabel>
          End Date:
          <input
            type="date"
            name="to"
            value={this.props.project.to}
            onChange={(e) => this.props.onChange(e, this.props.id)}
          />
        </DateLabel>
        <DeleteDiv>
          <button
            type="button"
            onClick={(e) => this.props.deleteProject(e, this.props.id)}
          >
            <DeleteImg src={trash} alt="delete" />
          </button>
        </DeleteDiv>
      </ProjectInputFieldWrapper>
    );
  }
}

const DeleteImg = styled.img`
  background-color: #ccc;
`;

const DeleteDiv = styled.div`
  grid-column: 3/4;
  grid-row: 1/4;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 20%;
`;

const DateLabel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const TitleLabel = styled.label`
  width: 80%;
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
`;

const DescriptionLabel = styled.label`
  grid-row: 2/4;
  display: flex;
  flex-direction: column;
`;

const DescriptionArea = styled.textarea`
  width: 100%;
  height: 80%;
`;

const ProjectInputFieldWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 3fr 0.5fr 0.25fr;
  gap: 15px;
  // background-color: #a3a3a3;
  padding: 3px;
`;

export default ProjectInputField;
