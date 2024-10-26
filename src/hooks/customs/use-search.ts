import { useEffect, useMemo, useRef, useState } from "react";

const useSearch = (props: { delay: number } = { delay: 800 }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isTouched, setTouched] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);

  const typingTimeoutRef = useRef<any>(null);

  const handleTyping = () => {
    clearTimeout(typingTimeoutRef.current);
    setIsTyping(true);

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, props?.delay);
  };

  const onChangeSearchValue = (value: string) => {
    setSearchValue(value);
    setTouched(true);
    handleTyping();
  };

  const isSync = useMemo(() => {
    return searchValue === debouncedSearchValue;
  }, [searchValue, debouncedSearchValue]);

  useEffect(() => {
    const timer = setTimeout(
      () => setDebouncedSearchValue(searchValue),
      props?.delay
    );

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, props?.delay]);

  return {
    onChangeSearchValue,
    debouncedSearchValue,
    searchValue,
    isTouched,
    isTyping,
    isSync,
  };
};

export default useSearch;
