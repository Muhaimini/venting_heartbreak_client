import { useQuery } from "@tanstack/react-query";
import QUERY_KEY from "~/constants/query-key";
import { InvitationTheme } from "~/types/responses/invitation-theme";
import axios from "~/utils/axios";

interface GetInvitationThemeDetailsProps {
  id: string;
  enabled?: boolean;
}

const useGetInvitationThemeDetails = ({
  id,
  enabled = true,
}: GetInvitationThemeDetailsProps) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_INVITATION_THEMES, { id }],
    queryFn: () =>
      axios.get<InvitationTheme>(`/api/v1/invitation_themes/${id}`),
    enabled,
  });
};

export default useGetInvitationThemeDetails;
