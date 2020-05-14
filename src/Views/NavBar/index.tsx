import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import { useGlobalState } from "Redux/state";

import NavItems from "Config/navBar";

import Nav from "Constants/Language/Nav";

import { logo } from "Assets/Images";

import style from "./style.module.scss";

const NavBar: React.FC = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const GlobalState = useGlobalState();
  const lang = Nav[GlobalState.language];

  return (
    <div className={style["container"]}>
      <nav className={style["left"]}>
        <header className={style["header"]}>
          <img className={style["nav-img"]} src={logo} alt="TEMP_NAME" />
          <div
            className={style["mode-selector"]}
            onClick={() => dispatch({ type: "state/MODE" })}
          >
            <span>{lang.mode.mode}:</span>
            <span>{lang.mode[GlobalState.mode]}</span>
          </div>
        </header>
        <ul className={style["nav-items"]}>
          {NavItems.map((navItem, index) => {
            if (!navItem[GlobalState.mode]) return;

            return (
              <li
                key={index}
                data-active={location.pathname === navItem.path}
                onClick={() => history.push(navItem.path)}
              >
                <div className={style["nav-item"]}>
                  <FontAwesomeIcon icon={navItem.icon} />
                  <span>{navItem.name}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <footer className={style["footer"]}>
          <FontAwesomeIcon icon="cog" />
          <FontAwesomeIcon data-new-notification={false} icon="bell" />
        </footer>
      </nav>
      <div className={style["right"]}>{children}</div>
    </div>
  );
};

export default NavBar;
