"use client";

import React, { useEffect, useState } from "react";
import { DUMMY_SECTIONS, DUMMY_MUSIC, WELCOME_PAGE } from "./dummy_data";
import useScrollIntoView from "~/hooks/customs/use-scroll-into-view";
import dayjs from "dayjs";
import cx from "classnames";
import useAudioPlayer from "~/hooks/customs/use-audio-player";
import PageBearer from "~/components/page-bearer";

const Wedding = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { targetRef, onScrollToTarget } = useScrollIntoView();

  const { onPlay, isPlaying } = useAudioPlayer({ src: DUMMY_MUSIC });

  useEffect(() => {
    if (!targetRef.current || !isPlaying) return;

    const timer = setTimeout(() => {
      onScrollToTarget();
      setCurrentPage((page) => page + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentPage, targetRef, isPlaying]);

  return (
    <PageBearer withDelayed isOpen={!isPlaying} onClose={onPlay}>
      <div className="overflow-y-auto h-full w-full overflow-x-hidden">
        <div className="w-full h-full bg-gradient-to-b from-black to-base">
          <div className="flex relative h-screen w-screen overflow-y-auto">
            <div className="relative h-screen w-full flex flex-col items-center justify-center bg-base">
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center grayscale opacity-5"
                style={{
                  backgroundImage: `url(${WELCOME_PAGE.COVER})`,
                }}
              />
              <div className="font-delafield flex flex-col gap-2 items-center">
                <div className="text-8xl animate-fade-in">
                  {WELCOME_PAGE.GROOM} <span className="text-5xl">&</span>{" "}
                  {WELCOME_PAGE.BRIDE}
                </div>
                <div className="text-2xl animate-fade-in">
                  {dayjs(WELCOME_PAGE.DATE).format("DD MM YYYY")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          {DUMMY_SECTIONS.map((section, idx) => (
            <div
              key={idx}
              ref={currentPage === idx + 1 ? targetRef : null}
              className={cx("relative w-full h-full", section.className)}
            >
              <div
                className={cx(
                  "relative flex flex-col items-center justify-center h-full w-full truncate text-wrap text-center",
                  {
                    "animate-fade-in": currentPage === idx + 2,
                  }
                )}
              >
                {section.constent}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageBearer>
  );
};

export default Wedding;
