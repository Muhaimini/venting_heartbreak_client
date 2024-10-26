"use client";

import React, { memo } from "react";
import cx from "classnames";
import { AiOutlineClose } from "react-icons/ai";
import useStore from "~/store";
import usePostInvitationSheet from "~/hooks/mutations/use-post-invitation-sheet";
import useQueryParams from "~/hooks/customs/use-query-params";
import useDeleteInvitationSheet from "~/hooks/mutations/use-delete-invitation-sheet";

const creator_id = "b28a90c3-7ba7-4dbc-a026-b9bc88ef99f4";

const ThemePreviwe = ({ isMinimize = false }) => {
  const params = useQueryParams();
  const invitation_desk_id = params?.invitation_desk_id as string;

  const { mutate: deleteSheetMutate } = useDeleteInvitationSheet();
  const { mutate: postSheetMutate } = usePostInvitationSheet();

  const {
    invitationPage: {
      pages,
      activePage,
      onAddPage,
      onRemovePage,
      setActivePage,
    },
  } = useStore();

  const onAddSheet = () => {
    postSheetMutate(
      { invitation_desk_id, creator_id },
      {
        onSuccess: (response) => {
          onAddPage({ id: response.data.id, content: response.data.content });
        },
      }
    );
  };

  const onRemoveSheet = (id: string) => {
    deleteSheetMutate(
      { invitation_sheet_id: id },
      {
        onSuccess: () => onRemovePage(id),
      }
    );
  };

  return (
    <div className="w-full h-full flex flex-col gap-3 p-10 items-center">
      {pages.map((page, idx) => (
        <div
          key={page.id}
          onClick={() => setActivePage(page.id)}
          className={cx(
            "relative shadow-md flex flex-col gap-3 items-center bg-white transition-all ease-in-out duration-500",
            {
              "w-80 min-h-[26rem]": !isMinimize,
              "w-[26rem] min-h-[34rem]": isMinimize,
              "outline outline-offset-2 outline-green-400":
                activePage.id === page?.id,
            }
          )}
        >
          <div
            onClick={(event) => {
              event.preventDefault();
              onRemoveSheet(page.id);
            }}
            className={cx("absolute top-1 right-1 cursor-pointer", {
              hidden: !idx || page.id === activePage.id,
            })}
          >
            <AiOutlineClose />
          </div>
          <div
            className="w-full px-4 py-2 ql-editor-displayer ql-editor"
            dangerouslySetInnerHTML={{ __html: page?.content }}
          />
        </div>
      ))}
      <button
        onClick={onAddSheet}
        className="px-2 py-1 border border-white rounded-md m-4 text-white"
      >
        Add page
      </button>
    </div>
  );
};

export default memo(ThemePreviwe);
