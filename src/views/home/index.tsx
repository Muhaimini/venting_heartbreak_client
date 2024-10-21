"use client";

import React from "react";
import InvitationOptions from "./invitation-options";
import Text from "~/components/text";
import useScrollIntoView from "~/hooks/customs/use-scroll-into-view";

const BACKGROUD = [
  "https://images.unsplash.com/photo-1612632281315-92ccdf803aba",
  "https://images.unsplash.com/photo-1604093882750-3ed498f3178b",
  "https://images.unsplash.com/photo-1593043927112-08289c3f1b64",
];

const HomePage = () => {
  const { targetRef, onScrollToTarget } = useScrollIntoView();

  return (
    <div className="relative h-screen w-screen overflow-y-auto">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-indigo-400">
        <h2 className="text-4xl font-bold text-stone-950 text-center z-10">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text drop-shadow-md">
            venting heartbreak!
          </span>
        </h2>
        <Text
          onClick={onScrollToTarget}
          className="cursor-pointer z-10 hover:text-blue-500"
        >
          Click atau scroll untuk membuat undangan
        </Text>
        <div
          className="absolute toText-0 left-0 w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1593043927112-08289c3f1b64')",
          }}
        />
      </div>
      <div
        ref={targetRef}
        className="sticky top-0 h-screen flex flex-col items-center bg-gradient-to-b from-purple-600 to-pink-600 text-white"
      >
        <InvitationOptions />
      </div>

      {/* <div className="sticky top-0 h-screen flex flex-col items-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white p-8">
        <InvitationOptions />
      </div>

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
        <h2 className="text-4xl font-bold">The Third slide</h2>
        <p className="mt-2">Scroll Down</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
        <h2 className="text-4xl font-bold">The Fourth slide</h2>
      </div> */}
    </div>
  );
};

export default HomePage;
