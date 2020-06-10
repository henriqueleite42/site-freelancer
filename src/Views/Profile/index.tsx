import React, { useState, useEffect } from "react";

import UserInfo from "./UserInfo";

import ProjectDone from "Components/ProjectDone";

import { useGlobalState } from "Redux/state";

import ProfileLang from "Constants/Language/Profile";

import templateProjects from "Temp/projects";

import style from "./style.module.scss";

const Profile: React.FC = () => {
  const GlobalState = useGlobalState();
  const lang = ProfileLang[GlobalState.language];

  const [projects, setProjects] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    let newProjects: Array<JSX.Element> = [];

    if (templateProjects.length < 4) {
      for (let i = 0; i < 4; i++) {
        if (templateProjects[i]) {
          newProjects.push(
            <ProjectDone key={i} project={templateProjects[i]} />
          );
        } else {
          newProjects.push(<ProjectDone key={i} />);
        }
      }
    } else {
      newProjects = templateProjects.map((project, index) => (
        <ProjectDone key={index} project={project} />
      ));
    }

    setProjects(newProjects);
  }, []);

  return (
    <div className={style["container"]}>
      <div className={style["left"]}>
        <div className={style["topic-title"]}>
          <span>{lang.recentProjects}</span>
        </div>
        {projects}
      </div>
      <div className={style["right"]}>
        <UserInfo />
      </div>
    </div>
  );
};

export default Profile;
