import axios from "~/utils/axios";

import { useMutation } from "@tanstack/react-query";
import { InvitationSheet } from "~/types/responses/invitation-sheet";

interface PostInvitationSheetProps {
  invitation_desk_id: string;
  creator_id: string;
  content?: string;
}

const usePostInvitationSheet = () => {
  return useMutation({
    mutationFn: ({ content = "", ...props }: PostInvitationSheetProps) => {
      return axios.post<InvitationSheet>("/api/v1/invitation_sheets", {
        ...props,
        content,
      });
    },
  });
};

export default usePostInvitationSheet;
