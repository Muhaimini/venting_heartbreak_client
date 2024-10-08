export const overrideType = <T = unknown>(props: unknown) => {
  if (!props) return;
  return props as T;
};
