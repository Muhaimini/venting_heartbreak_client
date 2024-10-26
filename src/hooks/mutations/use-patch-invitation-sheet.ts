import axios from "~/utils/axios";
import { useMutation } from "@tanstack/react-query";
import { InvitationSheet } from "~/types/responses/invitation-sheet";

interface PatchInvitationSheetProps {
  invitation_sheet_id: string;
  content: string;
}

const usePatchInvitationSheet = () => {
  return useMutation({
    mutationFn: ({
      invitation_sheet_id,
      content,
    }: PatchInvitationSheetProps) => {
      return axios.patch<InvitationSheet>(
        `/api/v1/invitation_sheets/${invitation_sheet_id}`,
        { content }
      );
    },
  });
};

export default usePatchInvitationSheet;
