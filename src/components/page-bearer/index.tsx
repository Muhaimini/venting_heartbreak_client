"use client";

import React, { FC, Fragment, ReactNode, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

interface PageBearerProps {
  onClose(): void;
  children: ReactNode;
  isOpen: boolean;
  withDelayed?: boolean;
}

const PageBearer: FC<PageBearerProps> = ({
  isOpen = true,
  withDelayed = false,
  children,
  onClose,
}) => {
  const [isClicked, onSetClicked] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [counter, setCounter] = useState(4);

  const isWindowMounted = typeof window !== "undefined";
  const isCounting = counter !== 4 && withDelayed;

  const onCloseBearer = () => {
    if (!withDelayed) {
      onClose();
      return;
    }

    if (withDelayed && !isClicked) {
      setCounter((prev) => prev - 1);
      onSetClicked(true);
      return;
    }

    if (withDelayed && counter === 0) {
      onClose();
      return;
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (withDelayed && isClicked && counter === 0) {
      onClose();
      return;
    }

    if (withDelayed && isClicked && counter > 0) {
      const timer = setTimeout(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [counter, withDelayed, isClicked]);

  if (!isWindowMounted || !isClient) return null;

  if (!isOpen) {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <div className="fixed h-full w-full bg-white">
      <div className="relative overflow-hidden w-full h-full">
        <div className="absolute h-full w-full bg-opacity-70 flex items-center justify-center z-50 bg-black">
          <div
            className="bg-white w-20 h-20 text-black rounded-full cursor-pointer flex items-center justify-center"
            onClick={onCloseBearer}
          >
            {isCounting ? (
              <div className="text-4xl font-bold">{counter}</div>
            ) : (
              <FaPlay className="h-8 w-8 cursor-pointer" />
            )}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PageBearer;
