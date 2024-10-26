import { useQuery } from "@tanstack/react-query";
import QUERY_KEY from "~/constants/query-key";
import { InvitationSheet } from "~/types/responses/invitation-sheet";

import axios from "~/utils/axios";

interface GetInvitationSheetsProps {
  id: string;
  enabled?: boolean;
}

const useGetInvitationSheets = ({
  id,
  enabled = true,
}: GetInvitationSheetsProps) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_INVITATION_SHEETS, { id }],
    queryFn: () =>
      axios.get<InvitationSheet[]>("/api/v1/invitation_sheets", {
        params: { invitation_desk_id: id },
      }),
    enabled,
  });
};

export default useGetInvitationSheets;
