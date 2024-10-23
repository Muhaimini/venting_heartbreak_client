import { useState } from "react";

const useAudioPlayer = ({ src }: { src: string }) => {
  const [audio] = useState(new Audio(src));

  const onToggle = () => {
    if (audio.paused) {
      onPlay();
      return;
    }
    onPause();
  };

  const onPlay = () => {
    audio.play();
  };

  const onPause = () => {
    audio.pause();
  };

  return { onPlay, onPause, onToggle, audio };
};

export default useAudioPlayer;
