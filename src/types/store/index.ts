declare module "@store" {
  type SetStore<T> = {
    set(callback: (props: T) => void): void;
  };

  type StoreController<T> = <K extends keyof T>(props: SetStore<T>) => T[K];
}
