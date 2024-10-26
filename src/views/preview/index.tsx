"use client";

import React from "react";
import useQueryParams from "~/hooks/customs/use-query-params";
import useGetInvitationDeskDetails from "~/hooks/queries/use-get-invtation-desk-details";
import { LayoutModel } from "~/models/themes/layouts";

const Preview = () => {
  const params = useQueryParams();
  const invitationDeskId = params?.invitation_desk_id as string;

  const { data: invitationDeskDetails, isLoading } =
    useGetInvitationDeskDetails({
      id: invitationDeskId,
      enabled: !!invitationDeskId,
    });

  const layouId = invitationDeskDetails?.data?.invitation_layout_id;
  const layputModel = new LayoutModel(invitationDeskId, layouId, isLoading);

  return <div className="h-full w-full text-white">{layputModel.render()}</div>;
};

export default Preview;
