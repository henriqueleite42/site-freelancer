import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import Input from "Components/Input";

import style from "./style.module.scss";

const Messages: React.FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["left"]}>
        <h1></h1>
      </div>
      <div className={style["right"]}>
        <div className={style["messages-conteiner"]}></div>
        <div className={style["input-container"]}>
          <form>
            <Input type="text" />
            <div>
              <FontAwesomeIcon icon="paper-plane" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Messages;
