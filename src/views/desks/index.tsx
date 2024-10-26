"use client";

import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import useGetInvitationDesks from "~/hooks/queries/use-get-desks";

const USER_ID = "b28a90c3-7ba7-4dbc-a026-b9bc88ef99f4";

const Desks = () => {
  const router = useRouter();
  const { data: desksData } = useGetInvitationDesks({
    creator_id: USER_ID,
    enabled: !!USER_ID,
  });

  const onSelectDesk = (id: string) => {
    router.push(`/sheet/${id}`);
  };

  const desks = useMemo(() => {
    if (desksData?.data) {
      return desksData.data.map((desk) => ({
        id: desk.id,
        description: desk.description,
        status: desk.status,
      }));
    }
    return [];
  }, [desksData]);

  return (
    <div className="flex flex-col w-full h-full items-center p-20">
      <h2 className="text-4xl font-bold">Your Desks</h2>
      <div className="grid grid-cols-1 gap-2 h-full items-center justify-center sm:grid-cols-3 overflow-y-auto">
        {desks.map((desk) => (
          <div
            key={desk.id}
            onClick={() => onSelectDesk(desk.id)}
            className="group relative bg-gray-900 block p-6 border border-gray-100 rounded-t-lg mx-auto w-60 xl:w-96 hover:cursor-pointer overflow-hidden"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />

            <div className="my-4">
              <h2 className="text-white text-2xl font-bold pb-2 capitalize group-hover:text-green-500">
                {desk?.description}
              </h2>
              <p className="text-gray-300 py-1 group-hover:text-green-500">
                {desk?.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desks;
