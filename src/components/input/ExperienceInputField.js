import React from "react";
import styled from "styled-components";
import trash from "../../assets/trash-bin.png";

class ExperienceInputField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ExperienceInputFieldWrapper>
        <PosAndCompany>
          <TitleLabel>
            Job title:
            <input
              type="text"
              name="possition"
              placeholder="Possition title"
              value={this.props.experience.possition}
              onChange={(e) => this.props.onChange(e, this.props.id)}
            />
          </TitleLabel>
          <TitleLabel>
            Company:
            <input
              type="text"
              name="company"
              placeholder="Company name"
              value={this.props.experience.company}
              onChange={(e) => this.props.onChange(e, this.props.id)}
            />
          </TitleLabel>
        </PosAndCompany>
        <DescriptionLabel>
          Description:
          <DescriptionArea
            name="description"
            placeholder="descibe your role..."
            value={this.props.experience.description}
            onChange={(e) => this.props.onChange(e, this.props.id)}
          />
        </DescriptionLabel>
        <DateLabel>
          Start Date:
          <input
            type="date"
            name="from"
            value={this.props.experience.from}
            onChange={(e) => this.props.onChange(e, this.props.id)}
          />
        </DateLabel>
        <DateLabel>
          End Date:
          <input
            type="date"
            name="to"
            value={this.props.experience.to}
            onChange={(e) => this.props.onChange(e, this.props.id)}
          />
        </DateLabel>
        <DeleteDiv>
          <button
            type="button"
            onClick={(e) => this.props.deleteExperience(e, this.props.id)}
          >
            <DeleteImg src={trash} alt="delete" />
          </button>
        </DeleteDiv>
      </ExperienceInputFieldWrapper>
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

const PosAndCompany = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  grid-column: 1/3;
  width: 80%;
`;

const TitleLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const ExperienceInputFieldWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 3fr 0.5fr 0.25fr;
  gap: 15px;
  // background-color: #a3a3a3;
  padding: 3px;
`;

export default ExperienceInputField;
