import React from "react";

// import DefaultBirthdayLayout from "./birthday";
import DefaultWeddingLayout from "./wedding";
import FlipBook from "./flip-book";

import useQueryParams from "~/hooks/customs/use-query-params";
import useGetInvitationThemeDetails from "~/hooks/queries/use-get-invitation-theme-detalis";
import DotsLoading from "~/components/dots-loading";

class ThemeModel {
  themeDetailId?: string;
  themeId?: string;
  isLoading?: boolean;

  constructor(themeDetailId?: string, themeId?: string, isLoading?: boolean) {
    this.themeDetailId = themeDetailId;
    this.themeId = themeId;
    this.isLoading = isLoading;
  }

  render = () => {
    const isFlipBook = this.themeId === "3203a925-9c4b-473f-b772-89318f8aba66";

    if (this.isLoading) {
      return <DotsLoading />;
    }

    if (isFlipBook) {
      return <FlipBook />;
    }

    return <DefaultWeddingLayout />;
  };
}

const ModelLayouts = () => {
  const params = useQueryParams();
  const themeDetailId = params?.id as string;

  const { data: invitationThemeDetails, isLoading } =
    useGetInvitationThemeDetails({
      enabled: !!themeDetailId,
      id: themeDetailId!,
    });

  const themeId = invitationThemeDetails?.data?.theme_layout?.id;
  const Theme = new ThemeModel(themeDetailId, themeId, isLoading);

  return <Theme.render />;
};

export default ModelLayouts;
