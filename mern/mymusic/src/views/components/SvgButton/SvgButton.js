import React from "react";
import Button from "../Button/Button";
import classNames from "classnames";
import "./SvgButton.scss";

export default function SvgButton({
  className,
  icon,
  label,
  onClick,
  type = "button",
}) {
  return (
    <>
      <Button
        className={classNames("btn--icon", `btn--${icon}`, className)}
        label={label}
        onClick={onClick}
        type={type}
      >
        <svg className={classNames("icon", `icon--${icon}`, className)}>
          <use href={`#icon-${icon}`} />
        </svg>
      </Button>
    </>
  );
}
