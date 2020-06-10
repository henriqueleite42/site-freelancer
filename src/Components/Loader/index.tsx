import React from "react";

import style from "./style.module.scss";

interface Props {
  label?: string | number;
  size?: "micro" | "mini" | "tiny" | "medium";
  mode?: "none" | "fill" | "full";
  progress?: number;
}

const Loader: React.FC<Props> = ({ progress, mode, size, label }) => {
  const getProgress = () => {
    if (!progress) return undefined;

    const total = Math.round(progress / 10);

    if (total > 10 || total < 0) return 0;
    else return total;
  };

  return (
    <div
      data-mode={mode || "fill"}
      data-size={size || "medium"}
      className={style["container"]}
    >
      <div data-progress={getProgress()} className={style["water"]}>
        {label && <span className={style["label"]}>{label}</span>}
      </div>
    </div>
  );
};

export default Loader;
