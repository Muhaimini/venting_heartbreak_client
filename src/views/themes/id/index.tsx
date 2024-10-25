"use client";

import React from "react";
import ThemeLayouts from "~/models/themes/layouts";
import useQueryParams from "~/hooks/customs/use-query-params";

const TempalteThemeDetails = () => {
  const params = useQueryParams();
  const themeDetailId = params?.id as string;

  return <ThemeLayouts themeDetailId={themeDetailId} />;
};

export default TempalteThemeDetails;
