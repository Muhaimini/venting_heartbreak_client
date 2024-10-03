import { Size, SizeNumber } from "@types";

export const getSizeInPixel = (size: Size): SizeNumber => {
  switch (size) {
    case "xs":
      return 12;
    case "sm":
      return 14;
    case "md":
      return 16;
    case "lg":
      return 18;
    case "xl":
      return 20;
    case "xxl":
      return 24;
    default:
      return 16;
  }
};
