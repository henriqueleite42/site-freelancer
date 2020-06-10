import React from "react";

import style from "./style.module.scss";

const Loader: React.FC<React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>> = props => {
  let input: HTMLInputElement | null;

  return (
    <div
      className={style["container"]}
      onClick={() => (input ? input.focus() : false)}
    >
      <input ref={ref => (input = ref)} {...props} />
    </div>
  );
};

export default Loader;
