import React from "react";

import { SimpleOptions } from "Interfaces/Options";

import style from "./style.module.scss";

interface Props extends SimpleOptions {
  fontSize?: string;
}

const Radio: React.FC<Props> = ({ fontSize, value, options, onSelect }) => {
  return (
    <div className={style["container"]}>
      {options.map((option, index) => (
        <span
          key={index}
          style={{ fontSize: fontSize || "1em" }}
          className={style["option"]}
          data-selected={value === option.value}
          onClick={() => onSelect(option.value)}
        >
          {option.option}
        </span>
      ))}
    </div>
  );
};

export default Radio;
