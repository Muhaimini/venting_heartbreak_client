import { useQuery } from "@tanstack/react-query";
import QUERY_KEY from "~/constants/query-key";
import { InvitationType } from "~/types/responses/invitation-types";
import axios from "~/utils/axios";

interface GetInvitationTypesProps {
  enabled?: boolean;
}

const useGetInvitationTypes = (
  { enabled }: GetInvitationTypesProps = { enabled: true }
) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_INVITATON_TYPES],
    queryFn: () => axios.get<Array<InvitationType>>("/api/v1/theme_types"),
    enabled,
  });
};

export default useGetInvitationTypes;
