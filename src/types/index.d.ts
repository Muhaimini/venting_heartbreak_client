declare module "@types" {
  type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  type Color = "blue" | "red" | "green" | "black" | "yellow" | "white" | "grey";

  type DayNumber = 1 | 2 | 3 | 4 | 5 | 6;
  type SizeNumber = 12 | 14 | 16 | 18 | 20 | 24;
  type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

  interface Disclosure {
    isOpen: boolean;
    onClose: boolean;
    onOpen: boolean;
  }
}
