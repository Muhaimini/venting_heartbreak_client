import { useQuery } from "@tanstack/react-query";
import QUERY_KEY from "~/constants/query-key";
import { InvitationDesk } from "~/types/responses/invitation-desk";

import axios from "~/utils/axios";

interface GetInvitationDeskDetailsProps {
  id: string;
  enabled?: boolean;
}

const useGetInvitationDeskDetails = ({
  id,
  enabled = true,
}: GetInvitationDeskDetailsProps) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_INVITATION_DESKS, { id }],
    queryFn: () => axios.get<InvitationDesk>(`/api/v1/invitation_desks/${id}`),
    enabled,
  });
};

export default useGetInvitationDeskDetails;
