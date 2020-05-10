import React from "react";

import HistoryItem from "./HistoryItem";

import { useGlobalState } from "Redux/state";

import Language from "Constants/Language";

import { profile } from "Assets/Images/index";

import style from "./style.module.scss";

const historyItems = [{}, {}, {}, {}, {}, {}, {}];

const Profile: React.FC = () => {
  const GlobalState = useGlobalState();
  const lang = Language[GlobalState.language].profile;

  return (
    <div className={style["container"]}>
      <div>
        <img className={style["profile-pic"]} src={profile} alt="profile-pic" />
      </div>
      <div>
        <h1 className={style["topic"]}>{lang.history}</h1>
        <div className={style["history"]}>
          {historyItems.map((item, index) => (
            <HistoryItem key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
