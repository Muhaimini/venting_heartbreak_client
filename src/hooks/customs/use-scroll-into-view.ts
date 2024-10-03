import { useRef } from "react";

const useScrollIntoView = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const onScrollToTarget = () => {
    if (!targetRef.current) return;

    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { targetRef, onScrollToTarget };
};

export default useScrollIntoView;
