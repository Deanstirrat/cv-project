import React from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import CVForm from "./input/CVForm";
import CVPreview from "./preview/CVPreview";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cv: cv,
    };
  }

  handlePersonalChange(e) {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      cv: {
        ...prevState.cv,
        personalInfo: {
          ...prevState.cv.personalInfo,
          [name]: value,
        },
      },
    }));
  }

  handleEducationChange(e, id) {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const updatedEducation = prevState.cv.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });

      return {
        ...prevState,
        cv: {
          ...prevState.cv,
          education: [...updatedEducation],
        },
      };
    });
  }

  handleAddEducation() {
    this.setState((prevState) => {
      return {
        ...prevState,
        cv: {
          ...prevState.cv,
          education: [
            ...prevState.cv.education,
            {
              id: uniqid(),
              universityName: "University name",
              degreeType: "Degree type",
              major: "Major",
              from: "2021-04-08",
              to: "2022-09-09",
            },
          ],
        },
      };
    });
  }

  handleDeleteEducation(e, id) {
    this.setState((prevState) => {
      const updatedEducation = prevState.cv.education.filter(
        (educationItem) => educationItem.id !== id
      );

      return {
        ...prevState,
        cv: {
          ...prevState.cv,
          education: [...updatedEducation],
        },
      };
    });
  }

  handleProjectChange(e, id) {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const updatedProjects = prevState.cv.projects.map((projectItem) => {
        if (projectItem.id === id) {
          return { ...projectItem, [name]: value };
        }
        return projectItem;
      });

      return {
        ...prevState,
        cv: {
          ...prevState.cv,
          projects: [...updatedProjects],
        },
      };
    });
  }

  handleAddProject() {
    this.setState((prevState) => {
      return {
        ...prevState,
        cv: {
          ...prevState.cv,
          projects: [
            ...prevState.cv.projects,
            {
              id: uniqid(),
              title: "project title",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              from: "2021-04-08",
              to: "2022-09-09",
            },
          ],
        },
      };
    });
  }

  handleDeleteProject(e, id) {
    this.setState((prevState) => {
      const updatedProjects = prevState.cv.projects.filter(
        (project) => project.id !== id
      );

      return {
        ...prevState,
        cv: {
          ...prevState.cv,
          projects: [...updatedProjects],
        },
      };
    });
  }

  handleExperienceChange(e, id) {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const updatedExperience = prevState.cv.experience.map(
        (experienceItem) => {
          if (experienceItem.id === id) {
            return { ...experienceItem, [name]: value };
          }
          return experienceItem;
        }
      );

      return {
        ...prevState,
        cv: {
          ...prevState.cv,
          experience: [...updatedExperience],
        },
      };
    });
  }

  handleAddExperience() {
    this.setState((prevState) => {
      return {
        ...prevState,
        cv: {
          ...prevState.cv,
          experience: [
            ...prevState.cv.experience,
            {
              id: uniqid(),
              possition: "job title",
              company: "company name",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              from: "2021-04-08",
              to: "2022-09-09",
            },
          ],
        },
      };
    });
  }

  handleDeleteExperience(e, id) {
    this.setState((prevState) => {
      const updatedExperience = prevState.cv.experience.filter(
        (experienceItem) => experienceItem.id !== id
      );

      return {
        ...prevState,
        cv: {
          ...prevState.cv,
          experience: [...updatedExperience],
        },
      };
    });
  }

  render() {
    return (
      <MainWrapper>
        <CVForm
          cv={this.state.cv}
          onChangePersonal={this.handlePersonalChange.bind(this)}
          onChangeEducation={this.handleEducationChange.bind(this)}
          addEducation={this.handleAddEducation.bind(this)}
          deleteEducation={this.handleDeleteEducation.bind(this)}
          onChangeProjects={this.handleProjectChange.bind(this)}
          addProject={this.handleAddProject.bind(this)}
          deleteProject={this.handleDeleteProject.bind(this)}
          onChangeExperience={this.handleExperienceChange.bind(this)}
          addExperience={this.handleAddExperience.bind(this)}
          deleteExperience={this.handleDeleteExperience.bind(this)}
        />
        <CVPreview cv={this.state.cv} />
      </MainWrapper>
    );
  }
}

export default Main;

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1800px;
  padding: 4rem 8rem;
  margin: 0 auto;
  margin-bottom: 4rem;
  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const cv = {
  personalInfo: {
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  },
  projects: [
    // {
    //   id: uniqid(),
    //   title: "",
    //   description: "",
    //   from: "2021-04-08",
    //   to: "2022-09-09",
    // },
  ],
  experience: [
    // {
    //   id: uniqid(),
    //   position: "",
    //   company: "",
    //   description: "",
    //   from: "",
    //   to: "",
    // },
  ],
  education: [
    // {
    //   id: uniqid(),
    //   universityName: "",
    //   degreeType: "",
    //   major: "",
    //   from: "2017-04-08",
    //   to: "2021-04-08",
    // },
  ],
};
