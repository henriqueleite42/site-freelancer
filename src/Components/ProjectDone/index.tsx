import React from "react";

import InfoItem from "./InfoItem";

import { useGlobalState } from "Redux/state";

import { formattedDiff } from "Utils/Date";

import ProjectLang from "Constants/Language/Project";

import { Project } from "Interfaces/Project";

import style from "./style.module.scss";

export interface ProjectDoneInterface {
  project?: Project;
}

const ProjectDone: React.FC<ProjectDoneInterface> = ({ project }) => {
  const GlobalState = useGlobalState();
  const lang = ProjectLang[GlobalState.language];

  const calcCost = (price: number): 1 | 2 | 3 | 4 | 5 => {
    return 3;
  };

  const getHeader = () => {
    if (!project) return <InfoItem />;

    if (!project.private) {
      return <p className={style["title"]}>{project.title}</p>;
    }

    return <span className={style["private-project"]}>{lang.private}</span>;
  };

  return (
    <div className={style["container"]}>
      {getHeader()}
      <InfoItem
        icon={project ? "calendar-alt" : undefined}
        svgColor="blue"
        label={
          project
            ? formattedDiff(
                project.dateStart,
                project.dateEnd as Date,
                GlobalState.language
              )
            : undefined
        }
      />
      <InfoItem
        icon={project ? "star" : undefined}
        svgColor="yellow"
        isRating={true}
        iconRepeat={project ? project.stars : undefined}
      />
      <InfoItem
        icon={project ? "dollar-sign" : undefined}
        svgColor="green"
        isRating={true}
        svgPadding={true}
        iconRepeat={project ? calcCost(project.price) : undefined}
      />
      <p
        data-withOutComment={
          project ? project.employerComment?.length < 1 : false
        }
        className={style["comment"]}
      >
        {project
          ? project.employerComment?.length > 0
            ? project.employerComment
            : lang.withOutComment
          : undefined}
      </p>
    </div>
  );
};

export default ProjectDone;
