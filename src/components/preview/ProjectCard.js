import React from "react";
import styled from "styled-components";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let f = new Date(this.props.project.from);
    f = month[f.getMonth()] + " " + f.getFullYear();
    let t = new Date(this.props.project.to);
    const curr = new Date();
    if (
      curr.getMonth == t.getMonth &&
      curr.getFullYear == t.getFullYear &&
      curr.getDay() == t.getDay()
    ) {
      t = "ongoing";
    } else t = month[t.getMonth()] + " " + t.getFullYear();

    return (
      <ProjectCardWrapper>
        <h4> {this.props.project.title} </h4>
        <h4>
          {f}
          {"-"}
          {t}
        </h4>
        <DescriptionWrapper>
          {" "}
          {this.props.project.description}{" "}
        </DescriptionWrapper>
      </ProjectCardWrapper>
    );
  }
}

const DescriptionWrapper = styled.p`
  grid-column: 1/3;
`;

const ProjectCardWrapper = styled.div`
  display: grid;
  grid-template-rows: 20px 3fr;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  padding: 5px;
`;

export default ProjectCard;
