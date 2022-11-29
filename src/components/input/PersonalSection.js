import React from "react";
import styled from "styled-components";

class PersonalSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <fieldset>
        <h3>Personal info</h3>
        <SectionWrapper>
          <Label>
            First name:
            <Input
              type="text"
              name="firstName"
              placeholder="John"
              value={this.props.personalInfo.firstName}
              onChange={this.props.onChange}
            />
          </Label>
          <Label>
            Last name:
            <Input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={this.props.personalInfo.lastName}
              onChange={this.props.onChange}
            />
          </Label>
          <Label>
            Address:
            <Input
              type="text"
              name="address"
              placeholder="10 Walnut St."
              value={this.props.personalInfo.address}
              onChange={this.props.onChange}
            />
          </Label>
          <Label>
            Phone number:
            <Input
              type="number"
              name="phoneNumber"
              placeholder="7077732739"
              value={this.props.personalInfo.phoneNumber}
              onChange={this.props.onChange}
            />
          </Label>
          <Label>
            Email:
            <Input
              type="text"
              name="email"
              placeholder="JohnDoe@gmail.com"
              value={this.props.personalInfo.email}
              onChange={this.props.onChange}
            />
          </Label>
        </SectionWrapper>
      </fieldset>
    );
  }
}

export default PersonalSection;

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
