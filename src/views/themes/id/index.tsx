"use client";

import React from "react";
import useQueryParams from "~/hooks/customs/use-query-params";

const ThemesByCategory = () => {
  const params = useQueryParams();
  const themeTypeId = params?.id;

  console.log("themeTypeId >>", themeTypeId);

  return (
    <div className="bg-gradient-to-b from-blue-400 to-indigo-500 text-black h-full w-full">
      Theme by category!
    </div>
  );
};

export default ThemesByCategory;
