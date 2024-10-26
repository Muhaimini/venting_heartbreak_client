"use client";

import React, { Fragment, useMemo } from "react";
// import Polaroid from "~/components/polaroid";
import useAudioPlayer from "~/hooks/customs/use-audio-player";
import useFlipBook from "~/hooks/customs/use-flip-book";
import useGetInvitationSheets from "~/hooks/queries/use-get-invitation-sheets";

const Sheets = ({ deskId = "", onPlay = () => {}, onPause = () => {} }) => {
  const { onMovePage, refPage } = useFlipBook();

  const { data: invitationSheets } = useGetInvitationSheets({
    enabled: !!deskId,
    id: deskId,
  });

  const dataSheets = useMemo(() => {
    if (invitationSheets?.data) {
      return invitationSheets.data
        .map((sheet) => ({
          id: sheet.id,
          content: sheet.content,
        }))
        .concat({ id: "last", content: "" });
    }
    return [];
  }, [invitationSheets]);

  return (
    <Fragment>
      {dataSheets.map((sheet, idx) => {
        if (idx === 0) {
          return (
            <Fragment key={idx}>
              <div
                className="page cover-front"
                onClick={(e) => {
                  onMovePage(e.currentTarget, idx + 1);
                  onPlay();
                }}
                ref={refPage}
              >
                <div className="h-5/6 flex items-center justify-center">
                  <div>{sheet.content}</div>
                </div>
              </div>
              <div
                className="page cover-front"
                onClick={(e) => {
                  onMovePage(e.currentTarget, idx + 2);
                  onPause();
                }}
                ref={refPage}
              ></div>
            </Fragment>
          );
        }

        if (idx === dataSheets.length - 1) {
          return (
            <Fragment>
              <div
                className="page"
                onClick={(e) =>
                  onMovePage(e.currentTarget, dataSheets.length + 1)
                }
                ref={refPage}
              ></div>
              <div
                className="page last-page"
                onClick={(e) => {
                  onMovePage(e.currentTarget, dataSheets.length + 2);
                  onPause();
                }}
                ref={refPage}
              ></div>
              <div
                className="page last-page"
                onClick={(e) => {
                  onMovePage(e.currentTarget, dataSheets.length + 3);
                  onPlay();
                }}
                ref={refPage}
              ></div>
            </Fragment>
          );
        }

        return (
          <div
            className="page text-page"
            onClick={(e) => onMovePage(e.currentTarget, (idx += 2))}
            ref={refPage}
          >
            <div className="paragraph flex flex-col">{sheet.content}</div>
          </div>
        );
      })}
    </Fragment>
  );
};

const FlipBook = ({ deskId = "" }) => {
  const { onPlay, onPause } = useAudioPlayer({
    src: "https://dl.sndup.net/sjsrb/Fourtwnty%20-%20Sebelah%20Mata.mp3",
  });

  return (
    <div className="relative h-screen w-screen overflow-y-hidden">
      <div className="book">
        <Sheets deskId={deskId} onPause={onPause} onPlay={onPlay} />
      </div>
    </div>
  );
};

export default FlipBook;
