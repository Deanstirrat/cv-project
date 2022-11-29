import React from "react";
import styled from "styled-components";
import trash from "../../assets/trash-bin.png";

class EducationInputField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SectionWrapper>
        <DeleteDiv>
          <button
            type="button"
            onClick={(e) => this.props.deleteEducation(e, this.props.id)}
          >
            <DeleteImg src={trash} alt="delete" />
          </button>
        </DeleteDiv>
        <Label>
          University Name:
          <Input
            type="text"
            name="universityName"
            placeholder="School name"
            value={this.props.education.universityName}
            onChange={(e) => this.props.onChange(e, this.props.id)}
          />
        </Label>
        <Label>
          Degree type:
          <Input
            type="text"
            name="degreeType"
            placeholder="Degree type"
            value={this.props.education.degreeType}
            onChange={(e) => this.props.onChange(e, this.props.id)}
          />
        </Label>
        <Label>
          Major:
          <Input
            type="text"
            name="major"
            placeholder="Major"
            value={this.props.education.major}
            onChange={(e) => this.props.onChange(e, this.props.id)}
          />
        </Label>
        <DateLabel>
          Start Date:
          <input
            type="date"
            name="from"
            value={this.props.education.from}
            onChange={(e) => this.props.onChange(e, this.props.id)}
          />
        </DateLabel>
        <DateLabel>
          End Date:
          <input
            type="date"
            name="to"
            value={this.props.education.to}
            onChange={(e) => this.props.onChange(e, this.props.id)}
          />
        </DateLabel>
      </SectionWrapper>
    );
  }
}

export default EducationInputField;

const DeleteImg = styled.img`
  background-color: #ccc;
  height: 30px;
  width: 30px;
`;

const DeleteDiv = styled.div`
  height: 25px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 30px;
`;

const DateLabel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  width: 40%;
`;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 5px;
  text-align: center;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
`;
