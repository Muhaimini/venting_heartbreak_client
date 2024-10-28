import axios from "~/utils/axios";
import { useMutation } from "@tanstack/react-query";
import { InvitationSheet } from "~/types/responses/invitation-sheet";

interface PatchInvitationDeskProps {
  invitation_desk_id: string;
  data: Partial<{
    invitation_layout_id: string;
    description: string;
    music_theme_id: string;
  }>;
}

const usePatchInvitationDesk = () => {
  return useMutation({
    mutationFn: ({ invitation_desk_id, data }: PatchInvitationDeskProps) => {
      return axios.patch<InvitationSheet>(
        `/api/v1/invitation_desks/${invitation_desk_id}`,
        data
      );
    },
  });
};

export default usePatchInvitationDesk;
