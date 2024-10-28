"use client";

import React, { Fragment, useMemo } from "react";

import useAudioPlayer from "~/hooks/customs/use-audio-player";
import useFlipBook from "~/hooks/customs/use-flip-book";
import useGetInvitationSheets from "~/hooks/queries/use-get-invitation-sheets";
import useGetInvitationDeskDetails from "~/hooks/queries/use-get-invtation-desk-details";

const DUMMY_SHEETS_ODD = [{ id: "1", content: "<p></p>" }];

const DUMMY_SHEETS_EVENT = [
  { id: "1", content: "<p></p>" },
  { id: "2", content: "<p></p>" },
];

const Sheets = ({ deskId = "", onPlay = () => {}, onPause = () => {} }) => {
  const { onMovePage, refPage } = useFlipBook();

  const { data: invitationSheets } = useGetInvitationSheets({
    enabled: !!deskId,
    id: deskId,
  });

  const dataSheets = useMemo(() => {
    if (invitationSheets?.data) {
      const result = invitationSheets.data.map((sheet) => ({
        id: sheet.id,
        content: sheet.content,
      }));

      const isEven = result.length % 2 === 0;

      return !isEven
        ? [...result, ...DUMMY_SHEETS_ODD]
        : [...result, ...DUMMY_SHEETS_EVENT];
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
                  <div dangerouslySetInnerHTML={{ __html: sheet.content }} />
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
                className="page last-page"
                onClick={(e) => {
                  onMovePage(e.currentTarget, dataSheets.length + 1);
                  onPause();
                }}
                ref={refPage}
              >
                <div
                  className="paragraph flex flex-col"
                  dangerouslySetInnerHTML={{ __html: sheet.content }}
                />
              </div>
              <div
                className="page last-page"
                onClick={(e) => {
                  onMovePage(e.currentTarget, dataSheets.length + 2);
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
            <div
              className="paragraph flex flex-col"
              dangerouslySetInnerHTML={{ __html: sheet.content }}
            />
          </div>
        );
      })}
    </Fragment>
  );
};

const FlipBook = ({ deskId = "" }) => {
  const { data: deskData } = useGetInvitationDeskDetails({
    id: deskId,
    enabled: !!deskId,
  });

  const { onPlay, onPause } = useAudioPlayer({
    src: deskData?.data?.music_theme?.src,
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
