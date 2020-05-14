import React, { useState } from "react";

import ProjectDone from "Components/ProjectDone";

import { useGlobalState } from "Redux/state";

import ProfileLang from "Constants/Language/Profile";

import { Project } from "Interfaces/Project";

import { profile } from "Assets/Images/index";

import trueProjects from "Temp/projects";

import style from "./style.module.scss";

const Profile: React.FC = () => {
  const GlobalState = useGlobalState();
  const lang = ProfileLang[GlobalState.language];

  const [projects, setProjects] = useState<Array<Project>>(trueProjects);

  return (
    <div className={style["container"]}>
      <div className={style["left"]}>
        <img className={style["profile-pic"]} src={profile} alt="profile-pic" />
      </div>
      <div className={style["right"]}>
        <div className={style["topic-title"]}>
          <span>{lang.lastedProjects}</span>
        </div>
        {projects.map((item, index) => (
          <ProjectDone key={index} project={item} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
