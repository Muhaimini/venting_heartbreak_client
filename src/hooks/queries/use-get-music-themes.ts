import { useQuery } from "@tanstack/react-query";
import QUERY_KEY from "~/constants/query-key";
import { Music_theme } from "~/types/responses/invitation-desk";

import axios from "~/utils/axios";

interface GetMusicThemesProps {
  enabled?: boolean;
}

const useGetMusicThemes = (
  { enabled }: GetMusicThemesProps = { enabled: true }
) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_MUSIC_THEMES],
    queryFn: () => axios.get<Array<Music_theme>>("/api/v1/music_themes"),
    enabled,
  });
};

export default useGetMusicThemes;
