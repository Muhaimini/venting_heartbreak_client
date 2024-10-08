import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import NAVIGATION_ADDRESS from "~/constants/navigation_addess";
import useGetInvitationTypes from "~/hooks/queries/use-get-invitation-types";

const InvitationOptions = () => {
  const router = useRouter();
  const { data } = useGetInvitationTypes();

  const invitationTypes = useMemo(() => data?.data ?? [], [data?.data]);

  const onSelectTheme = (typeId?: string) => {
    if (typeId) {
      router.push(`${NAVIGATION_ADDRESS.THEMES}/${typeId}`);
      return;
    }
    router.push(NAVIGATION_ADDRESS.THEMES);
  };

  return (
    <div className="flex flex-col w-full h-full items-center p-20">
      <h2 className="text-4xl font-bold">Pilih undangan</h2>
      <div className="grid grid-cols-1 gap-2 h-full items-center justify-center sm:grid-cols-3 overflow-y-auto">
        {invitationTypes.map((invitationType) => (
          <div
            onClick={() => onSelectTheme(invitationType?.id)}
            className="group relative bg-gray-900 block p-6 border border-gray-100 rounded-t-lg mx-auto w-60 xl:w-96 hover:cursor-pointer overflow-hidden"
          >
            {invitationType?.img_cover && (
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30 rounded-t-lg transition-transform duration-500 hover:scale-110"
                style={{
                  backgroundImage: `url('${invitationType.img_cover}')`,
                }}
              />
            )}
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />

            <div className="my-4">
              <h2 className="text-white text-2xl font-bold pb-2 capitalize group-hover:text-green-500">
                {invitationType?.title}
              </h2>
              <p className="text-gray-300 py-1 group-hover:text-green-500">
                {invitationType?.description}
              </p>
            </div>

            {/* <div className="flex justify-end">
              <button className="px-2 py-1 text-white border border-gray-200 font-semibold rounded hover:bg-gray-800">
                Pilih
              </button>
            </div> */}
          </div>
        ))}

        <div
          onClick={() => onSelectTheme()}
          className="group relative bg-gray-900 block p-6 border border-gray-100 rounded-t-lg mx-auto w-60 xl:w-96 hover:cursor-pointer"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
          <div className="my-4">
            <h2 className="text-white text-2xl font-bold pb-2 capitalize group-hover:text-green-500">
              All
            </h2>
            <p className="text-gray-300 py-1 group-hover:text-green-500">
              All themes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationOptions;
