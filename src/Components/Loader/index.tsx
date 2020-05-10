import React from "react";

import style from "./style.module.scss";

interface Props {
  mode?: "fill" | "full";
  progress?: number;
}

const Loader: React.FC<Props> = ({ progress, mode }) => {
  const getProgress = () => {
    if (!progress) return undefined;

    return Math.round(progress / 10);
  };

  return (
    <div data-mode={mode || "fill"} className={style["container"]}>
      <div data-progress={getProgress()} className={style["water"]} />
    </div>
  );
};

export default Loader;
