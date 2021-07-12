import React from "react";
import classNames from "classnames";

export default function Button({
  children,
  className,
  label,
  onClick,
  type = "button",
}) {
  return (
    //aria-label: accessibility for usage
    <button
      aria-label={label}
      className={classNames("btn", className)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
