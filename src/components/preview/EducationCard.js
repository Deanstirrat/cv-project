import React from "react";
import styled from "styled-components";

class EducationCard extends React.Component {
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

    let f = new Date(this.props.educationItem.from);
    f = month[f.getMonth()] + " " + f.getFullYear();
    let t = new Date(this.props.educationItem.to);
    const curr = new Date();
    if (
      curr.getMonth == t.getMonth &&
      curr.getFullYear == t.getFullYear &&
      curr.getDay() == t.getDay()
    ) {
      t = "ongoing";
    } else t = month[t.getMonth()] + " " + t.getFullYear();
    return (
      <div>
        <h4>{this.props.educationItem.universityName}</h4>
        <p>
          {this.props.educationItem.degreeType} {" in "}
          {this.props.educationItem.major}
        </p>
        <p>
          {f}
          {"-"}
          {t}
        </p>
      </div>
    );
  }
}

export default EducationCard;
