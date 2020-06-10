import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import Loader from "Components/Loader";

import { useUserState } from "Redux/user";

import User from "Functions/User";

import { profile } from "Assets/Images/index";

import style from "./style.module.scss";

const UserInfo: React.FC = () => {
  const UserState = useUserState();

  return (
    <div className={style["container"]}>
      <div className={style["profile-pic"]}>
        <img src={UserState.imgProfile || profile} alt="profile-pic" />
        <FontAwesomeIcon icon="edit" />
      </div>
      <div className={style["user-info"]}>
        <span
          className={style["name"]}
        >{`${UserState.firstName} ${UserState.lastName}`}</span>
        <span className={style["headline"]}>{UserState.headline}</span>
      </div>
      <div>
        <span className={style["group"]}>{UserState.group}</span>
      </div>
      <Loader
        size="micro"
        mode="none"
        label={UserState.lvl}
        progress={User.getXpPercentage(UserState.lvl, UserState.xp)}
      />
    </div>
  );
};

export default UserInfo;
