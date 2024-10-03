import React from "react";

const DotsLoading = () => {
  return (
    <div className="flex space-x-2 justify-center items-center mt-5">
      <div className="h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="h-4 w-4 bg-black rounded-full animate-bounce" />
    </div>
  );
};

export default DotsLoading;
