"use client";

import { useEffect, useState } from "react";

const useAudioPlayer = (props: { src?: string } = { src: "" }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onToggle = () => {
    if (isPlaying) {
      onPause();
      return;
    }
    onPlay();
  };

  const onPlay = async () => {
    if (!audio) return;
    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.log("Error attempting to play audio:", error);
    }
  };

  const onPause = () => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && props.src) {
      const audioElement = new Audio(props.src);
      setAudio(audioElement);

      // Cleanup on component unmount
      return () => {
        audioElement.pause();
        audioElement.src = "";
      };
    }
  }, [props.src]);

  return { onPlay, onPause, onToggle, audio, isPlaying };
};

export default useAudioPlayer;
