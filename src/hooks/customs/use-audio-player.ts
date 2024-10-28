import { useState } from "react";

const useAudioPlayer = (props: { src?: string } = { src: "" }) => {
  const [audio] = useState(new Audio(props?.src));

  const onToggle = () => {
    if (!props?.src) return;
    if (audio.paused) {
      onPlay();
      return;
    }
    onPause();
  };

  const onPlay = () => {
    if (!props?.src) return;
    audio.play();
  };

  const onPause = () => {
    if (!props?.src) return;
    audio.pause();
  };

  return { onPlay, onPause, onToggle, audio };
};

export default useAudioPlayer;
