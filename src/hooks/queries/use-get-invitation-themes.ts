import { useQuery } from "@tanstack/react-query";
import QUERY_KEY from "~/constants/query-key";
import axios from "~/utils/axios";

interface GetInvitationThemesProps {
  enabled?: boolean;
}

const useGetInvitationThemes = (
  { enabled }: GetInvitationThemesProps = { enabled: true }
) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_INVITATION_THEMES],
    queryFn: () => axios.get("/api/v1/invitation_themes"),
    enabled,
  });
};

export default useGetInvitationThemes;
