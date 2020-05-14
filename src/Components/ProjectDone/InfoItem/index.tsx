import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import style from "./style.module.scss";

export interface InfoItemInterface {
  icon: IconProp;
  label?: string;
  isRating?: boolean;
  iconRepeat?: number;
  svgPadding?: boolean;
  svgColor?: "yellow" | "green" | "blue";
}

const InfoItem: React.FC<InfoItemInterface> = ({
  icon,
  label,
  iconRepeat,
  svgPadding,
  svgColor,
  isRating
}) => {
  const getIcons = () => {
    if (!iconRepeat) {
      return <FontAwesomeIcon data-color={svgColor} icon={icon} />;
    }

    const icons = [];

    for (let i = 1; i < 6; i++) {
      icons.push(
        <FontAwesomeIcon
          key={i}
          data-color={(iconRepeat || 1) >= i ? svgColor : ""}
          icon={icon}
        />
      );

      if (!isRating && (iconRepeat || 1) === i) return icons;
    }

    return icons;
  };

  return (
    <div
      className={style["container"]}
      data-padding-svg={svgPadding}
      data-color-svg={svgColor}
    >
      {getIcons()}
      {label && <span>{label}</span>}
    </div>
  );
};

export default InfoItem;
