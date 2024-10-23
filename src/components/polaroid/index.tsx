import React from "react";
import cx from "classnames";

const Polaroid = ({ src, className }: { src?: string; className?: string }) => {
  return (
    <div className={cx("px-4 pt-4 pb-14 shadow-md bg-slate-100", className)}>
      <img src={src} className="border" />
    </div>
  );
};

export default Polaroid;
