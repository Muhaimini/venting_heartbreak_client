import { useQuery } from "@tanstack/react-query";
import QUERY_KEY from "~/constants/query-key";
import { SelectedInvitations } from "~/types/responses/selected-invitations";
import axios from "~/utils/axios";

interface GetSelectedInvitationsProps {
  enabled?: boolean;
}

const useGetSelectedInvitations = (
  { enabled }: GetSelectedInvitationsProps = { enabled: true }
) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_SELECTED_INVITATONS],
    queryFn: () =>
      axios.get<SelectedInvitations>("/api/v1/selected_invitations"),
    enabled,
  });
};

export default useGetSelectedInvitations;
