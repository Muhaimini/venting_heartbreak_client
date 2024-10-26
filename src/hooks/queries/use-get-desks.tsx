import { useQuery } from "@tanstack/react-query";
import QUERY_KEY from "~/constants/query-key";
import { InvitationDesk } from "~/types/responses/invitation-desk";

import axios from "~/utils/axios";

interface GetInvitationDesksProps {
  creator_id: string;
  enabled?: boolean;
}

const useGetInvitationDesks = ({
  creator_id,
  enabled = true,
}: GetInvitationDesksProps) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_INVITATION_DESKS, { creator_id }],
    queryFn: () =>
      axios.get<InvitationDesk[]>("/api/v1/invitation_desks", {
        params: { creator_id },
      }),
    enabled,
  });
};

export default useGetInvitationDesks;
