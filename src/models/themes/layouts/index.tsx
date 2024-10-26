import React from "react";

// import DefaultBirthdayLayout from "./birthday";
import DefaultWeddingLayout from "./wedding";
import FlipBook from "./flip-book";

// import useGetInvitationThemeDetails from "~/hooks/queries/use-get-invitation-theme-detalis";
import DotsLoading from "~/components/dots-loading";

export class LayoutModel {
  deskId?: string;
  layoutId?: string;
  isLoading?: boolean;

  constructor(deskId: string, layoutId?: string, isLoading?: boolean) {
    this.deskId = deskId;
    this.layoutId = layoutId;
    this.isLoading = isLoading;
  }

  render = () => {
    const isFlipBook = this.layoutId === "3203a925-9c4b-473f-b772-89318f8aba66";

    if (this.isLoading) {
      return <DotsLoading />;
    }

    if (isFlipBook) {
      return <FlipBook deskId={this.deskId} />;
    }

    return <DefaultWeddingLayout />;
  };
}

const ModelLayouts = ({ themeDetailId = "" }) => {
  // const { data: invitationThemeDetails, isLoading } =
  //   useGetInvitationThemeDetails({
  //     enabled: !!themeDetailId,
  //     id: themeDetailId!,
  //   });

  // const themeId = invitationThemeDetails?.data?.theme_layout?.id;
  // const Theme = new LayoutModel(themeDetailId, themeId, isLoading);

  // return <Theme.render />;
  return <div>Hello..</div>;
};

export default ModelLayouts;
