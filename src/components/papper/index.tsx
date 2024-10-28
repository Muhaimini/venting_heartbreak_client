import React, { FC, ReactNode } from "react";

interface PapperProps {
  children?: ReactNode;
}

const Papper: FC<PapperProps> = ({ children = "venting-hearbreak" }) => {
  return (
    <div className="paper">
      <div className="pin">
        <div className="shadow"></div>
        <div className="metal"></div>
        <div className="bottom-circle"></div>
      </div>
      <p>{children}</p>
    </div>
  );
};

export default Papper;
