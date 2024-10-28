import React, { FC, ReactNode } from "react";
import cx from "classnames";

interface TimelineWrapper {
  className?: string;
  children?: ReactNode;
}

interface TimelineSectionProps extends TimelineWrapper {
  last?: boolean;
}

type TimelineProps = FC<TimelineWrapper> & {
  Section: FC<TimelineSectionProps>;
};

const Timeline: TimelineProps = ({ className, children }) => {
  return (
    <ol
      className={cx("relative border-gray-200 dark:border-gray-700", className)}
    >
      {children}
    </ol>
  );
};

Timeline.Section = ({ last = false, children }: TimelineSectionProps) => {
  return (
    <li className="ms-6 group">
      <div className="absolute w-3 h-3 -start-1 mt-1.5 z-10">
        <span className="relative flex h-3 w-3">
          <span className="group-hover:animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-300"></span>
        </span>
      </div>
      <div className="relative h-full w-full">
        <div
          className={cx(
            "-start-[1.4rem] h-full w-full absolute border-s mt-2 border-x-gray-500",
            { hidden: last }
          )}
        />
        {children}
      </div>
    </li>
  );
};

export default Timeline;
