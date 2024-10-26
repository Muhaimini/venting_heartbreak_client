import axios from "~/utils/axios";
import { useMutation } from "@tanstack/react-query";

interface DeleteInvitationSheetProps {
  invitation_sheet_id: string;
}

const useDeleteInvitationSheet = () => {
  return useMutation({
    mutationFn: ({ invitation_sheet_id }: DeleteInvitationSheetProps) => {
      return axios.delete(`/api/v1/invitation_sheets/${invitation_sheet_id}`);
    },
  });
};

export default useDeleteInvitationSheet;
