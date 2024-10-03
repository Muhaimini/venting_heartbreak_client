import React, { useMemo } from "react";
import useGetInvitationTypes from "~/hooks/queries/use-get-invitation-types";

const InvitationOptions = () => {
  const { data } = useGetInvitationTypes();

  const invitationTypes = useMemo(() => data?.data ?? [], [data?.data]);

  console.log("invitationTypes >>", invitationTypes);

  return (
    <div className="flex flex-col w-full h-full items-center p-20">
      <h2 className="text-4xl font-bold">Pilih undangan</h2>
      <div className="flex flex-col gap-2 h-full items-center justify-center sm:flex-row">
        {invitationTypes.map((type) => (
          <div className="group relative bg-gray-900 block p-6 border border-gray-100 rounded-t-lg mx-auto w-96 sm:w-60 xs:w-60 hover:cursor-pointer">
            {type?.img_cover && (
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30 rounded-t-lg"
                style={{
                  backgroundImage: `url('${type.img_cover}')`,
                }}
              />
            )}
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />

            <div className="my-4">
              <h2 className="text-white text-2xl font-bold pb-2 capitalize group-hover:text-blue-500">
                {type.value}
              </h2>
              <p className="text-gray-300 py-1 group-hover:text-blue-500">
                Card description or content goes here.
              </p>
            </div>

            {/* <div className="flex justify-end">
              <button className="px-2 py-1 text-white border border-gray-200 font-semibold rounded hover:bg-gray-800">
                Pilih
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvitationOptions;
