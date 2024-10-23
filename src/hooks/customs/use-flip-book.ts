import { useRef, useState } from "react";

const useFlipBook = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesRef = useRef<HTMLDivElement[]>(Array(10).fill([]));

  const toggleClass = (event: HTMLElement, toggleClassName: string) => {
    if (event.className.includes(toggleClassName)) {
      event.className = event.className.replace(" " + toggleClassName, "");
    } else {
      event.className += " " + toggleClassName;
    }
  };

  const onMovePage = (event: HTMLElement, page: number) => {
    if (page === currentPage) {
      setCurrentPage((prev) => prev + 2);
      toggleClass(event, "left-side");
      toggleClass(event?.nextElementSibling! as any, "left-side");
    } else if (page === currentPage - 1) {
      setCurrentPage((prev) => prev - 2);
      toggleClass(event, "left-side");
      toggleClass(event?.previousElementSibling! as any, "left-side");
    }
  };

  const refPage = <T = HTMLDivElement>(event: T) => {
    if (pagesRef.current[currentPage]) return;
    return (pagesRef.current[currentPage] = event as any);
  };

  return { onMovePage, refPage };
};

export default useFlipBook;
