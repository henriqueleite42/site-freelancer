import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import InfoItem from "./InfoItem";

import { useGlobalState } from "Redux/state";

import { formattedDiff } from "Utils/Date";

import ProjectLang from "Constants/Language/Project";

import { Project } from "Interfaces/Project";

import style from "./style.module.scss";

export interface ProjectDoneInterface {
  project: Project;
}

const ProjectDone: React.FC<ProjectDoneInterface> = ({ project }) => {
  const GlobalState = useGlobalState();
  const lang = ProjectLang[GlobalState.language];

  const getSkills = () => {
    const result = [];

    while (result.length < 3 && project.skills[result.length]) {
      result.push(
        <span key={result.length}>{project.skills[result.length]}</span>
      );
    }

    if (result.length < project.skills.length) {
      result.push(
        <span data-bold="true" key={result.length}>{`+ ${project.skills.length -
          result.length}`}</span>
      );
    }

    return result;
  };

  const calcCost = (price: number): 1 | 2 | 3 | 4 | 5 => {
    return 3;
  };

  const getHeader = () => {
    if (!project.private) {
      return <p className={style["title"]}>{project.title}</p>;
    }

    return (
      <div className={style["private-project"]}>
        <FontAwesomeIcon icon="exclamation-circle" />
        <span>{lang.private}</span>
      </div>
    );
  };

  return (
    <div className={style["container"]}>
      {getHeader()}
      <InfoItem
        icon="calendar-alt"
        svgColor="blue"
        label={formattedDiff(
          project.dateStart,
          project.dateEnd as Date,
          GlobalState.language
        )}
      />
      <InfoItem
        icon="star"
        svgColor="yellow"
        isRating={true}
        iconRepeat={project.stars}
      />
      <InfoItem
        icon="dollar-sign"
        svgColor="green"
        isRating={true}
        svgPadding={true}
        iconRepeat={calcCost(project.price)}
      />
      <p
        data-withOutComment={project.employerComment?.length < 1}
        className={style["comment"]}
      >
        {project.employerComment?.length > 0
          ? project.employerComment
          : lang.withOutComment}
      </p>
      <div className={style["skills"]}>{getSkills()}</div>
    </div>
  );
};

export default ProjectDone;
